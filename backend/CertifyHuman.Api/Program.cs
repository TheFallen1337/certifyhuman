using CertifyHuman.Api.Data;
using CertifyHuman.Api.DTOs;
using CertifyHuman.Api.Models;
using CertifyHuman.Api.Options;
using DotNetEnv;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using System.IO;

Env.Load();

var builder = WebApplication.CreateBuilder(args);
builder.Configuration.AddEnvironmentVariables();

var stripeSecret = ResolveStripeSecret(builder.Configuration);

builder.Services.AddCors(options =>
{
    options.AddPolicy("frontend", policy =>
        policy
            .WithOrigins(
                "http://localhost:5500",
                "https://certifyhuman.vercel.app"
            )
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials());
});

var dbPath = Path.Combine(AppContext.BaseDirectory, "certifyhuman.db");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite($"Data Source={dbPath}"));

builder.Services.AddSingleton(new StripeSettings { SecretKey = stripeSecret ?? string.Empty });
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddProblemDetails();

var app = builder.Build();

app.UseExceptionHandler("/error");
app.UseSwagger(c =>
{
    c.RouteTemplate = "swagger/{documentName}/swagger.json";
});

app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "CertifyHuman API v1");
    c.RoutePrefix = "swagger";
});
app.UseStaticFiles();
app.UseCors("frontend");
app.UseHttpsRedirection();

app.MapGet("/", () => Results.Redirect("/admin/index.html"));
app.MapGet("/admin", () => Results.Redirect("/admin/index.html"));
app.Map("/error", (HttpContext http) => Results.Problem(detail: "An unexpected error occurred."));
app.MapMethods("{*path}", new[] { "OPTIONS" }, () => Results.Ok());

app.MapPost("/api/certificates/new", async (CertificateRequest request, AppDbContext context) =>
{
    var code = await GenerateUniqueCodeAsync(context);
    var paymentId = Guid.NewGuid().ToString("N");

    var certificate = new Certificate
    {
        Code = code,
        Title = request.Title,
        Creator = request.Creator,
        Email = request.Email,
        Type = request.Type,
        Description = request.Description,
        AiUsage = request.AiUsage,
        Status = "pending_payment",
        PaymentId = paymentId,
        Attachments = request.Attachments?.Where(a => !string.IsNullOrWhiteSpace(a)).Select(a => a.Trim()).ToList() ?? new List<string>()
    };

    context.Certificates.Add(certificate);
    await context.SaveChangesAsync();

    var response = new CertificateCreatedResponse(
        certificate.Code,
        certificate.Status,
        $"https://payments.certifyhuman.local/checkout/{paymentId}",
        paymentId);

    return Results.Created($"/api/certificates/{certificate.Code}", response);
}).WithName("CreateCertificate").Produces<CertificateCreatedResponse>(StatusCodes.Status201Created);

app.MapGet("/api/certificates/{code}", async (string code, AppDbContext context) =>
{
    var certificate = await context.Certificates
        .AsNoTracking()
        .Where(c => c.Code == code && c.Status == "approved")
        .FirstOrDefaultAsync();

    return certificate is null
        ? Results.NotFound()
        : Results.Ok(ToResponse(certificate));
}).WithName("GetApprovedCertificate").Produces<CertificateResponse>(StatusCodes.Status200OK).Produces(StatusCodes.Status404NotFound);

app.MapGet("/api/certificates/all", async (AppDbContext context) =>
{
    var certificates = await context.Certificates
        .AsNoTracking()
        .OrderByDescending(c => c.CreatedAt)
        .ToListAsync();

    return Results.Ok(certificates.Select(ToResponse));
}).WithName("GetAllCertificates");

app.MapPost("/api/payment/webhook", async (PaymentWebhookRequest payload, AppDbContext context, StripeSettings stripeOptions) =>
{
    if (string.IsNullOrWhiteSpace(payload.PaymentId))
    {
        return Results.BadRequest(new { message = "PaymentId is required." });
    }

    if (string.IsNullOrWhiteSpace(stripeOptions.SecretKey))
    {
        app.Logger.LogWarning("STRIPE_SECRET_KEY is not configured. Webhook signature validation is skipped.");
    }

    var certificate = await context.Certificates.FirstOrDefaultAsync(c => c.PaymentId == payload.PaymentId);
    if (certificate is null)
    {
        return Results.NotFound();
    }

    certificate.Status = "awaiting_review";
    await context.SaveChangesAsync();

    return Results.Ok(new { certificate.Code, certificate.Status });
}).WithName("PaymentWebhook");

app.MapPost("/api/certificates/{code}/approve", async (string code, DecisionRequest? decision, AppDbContext context) =>
{
    var certificate = await context.Certificates.FirstOrDefaultAsync(c => c.Code == code);
    if (certificate is null)
    {
        return Results.NotFound();
    }

    certificate.Status = "approved";
    certificate.DecisionNote = decision?.Note;
    await context.SaveChangesAsync();

    return Results.Ok(ToResponse(certificate));
}).WithName("ApproveCertificate");

app.MapPost("/api/certificates/{code}/reject", async (string code, DecisionRequest? decision, AppDbContext context) =>
{
    var certificate = await context.Certificates.FirstOrDefaultAsync(c => c.Code == code);
    if (certificate is null)
    {
        return Results.NotFound();
    }

    certificate.Status = "rejected";
    certificate.DecisionNote = decision?.Note;
    await context.SaveChangesAsync();

    return Results.Ok(ToResponse(certificate));
}).WithName("RejectCertificate");

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated(); // Utworzy bazę i tabele jeśli jeszcze nie istnieją
}


app.Run();

static CertificateResponse ToResponse(Certificate c) => new(
    c.Code,
    c.Title,
    c.Creator,
    c.Email,
    c.Type,
    c.Description,
    c.AiUsage,
    c.Status,
    c.CreatedAt,
    c.Attachments ?? new List<string>());

static async Task<string> GenerateUniqueCodeAsync(AppDbContext context)
{
    var random = new Random();
    string code;
    var exists = true;
    do
    {
        var part1 = random.Next(100000, 999999);
        var part2 = random.Next(100000, 999999);
        code = $"CH-{part1}-{part2}";
        exists = await context.Certificates.AnyAsync(c => c.Code == code);
    } while (exists);

    return code;
}

static string? ResolveStripeSecret(ConfigurationManager configuration)
{
    var envSecret = Environment.GetEnvironmentVariable("STRIPE_SECRET_KEY");
    return !string.IsNullOrWhiteSpace(envSecret)
        ? envSecret
        : configuration["Stripe:SecretKey"];
}
