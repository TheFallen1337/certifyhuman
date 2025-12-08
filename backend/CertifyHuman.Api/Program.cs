using CertifyHuman.Api.Data;
using CertifyHuman.Api.DTOs;
using CertifyHuman.Api.Models;
using CertifyHuman.Api.Options;
using DotNetEnv;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using UglyToad.PdfPig;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

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
                "http://localhost:8000",
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
builder.Services.AddHttpClient<AiOrNotService>();
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

app.MapGet("/", async context => {
    context.Response.ContentType = "text/html";
    await context.Response.SendFileAsync("wwwroot/index.html");
});
app.MapGet("/admin", () => Results.Redirect("/admin/index.html"));
app.Map("/error", (HttpContext http) => Results.Problem(detail: "An unexpected error occurred."));


app.MapPost("/api/certificates/new", async (CertificateRequest request, AppDbContext context, AiOrNotService aiService) =>
{
    var code = await GenerateUniqueCodeAsync(context);
    var paymentId = Guid.NewGuid().ToString("N");

    string? aiResult = null;
    
    // 1. Text Analysis (Article)
    if (request.Type == "article")
    {
        var combinedText = new StringBuilder();
        if (!string.IsNullOrWhiteSpace(request.ContentText))
        {
            combinedText.AppendLine(request.ContentText);
        }

        // Extract text from attachment if present
        if (!string.IsNullOrWhiteSpace(request.AttachmentBase64) && !string.IsNullOrWhiteSpace(request.AttachmentFileName))
        {
            try
            {
                var extracted = TextExtractor.Extract(request.AttachmentBase64, request.AttachmentFileName);
                if (!string.IsNullOrWhiteSpace(extracted))
                {
                    combinedText.AppendLine("\n--- ATTACHMENT CONTENT ---");
                    combinedText.AppendLine(extracted);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Extraction failed: {ex.Message}");
            }
        }

        var finalContent = combinedText.ToString();
        if (!string.IsNullOrWhiteSpace(finalContent))
        {
            // Limit length if needed, API limit is 500k chars, should be fine.
            aiResult = await aiService.AnalyzeTextAsync(finalContent);
        }
    }
    // 2. Image Analysis
    else if (request.Type == "image" && !string.IsNullOrWhiteSpace(request.ImageBase64))
    {
        aiResult = await aiService.AnalyzeImageAsync(request.ImageBase64);
    }

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
        Attachments = request.Attachments?.Where(a => !string.IsNullOrWhiteSpace(a)).Select(a => a.Trim()).ToList() ?? new List<string>(),
        AiAnalysisResult = aiResult
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

app.MapGet("/api/certificates/all", async (HttpContext http, AppDbContext context) =>
{
    if (!ValidateAdmin(http)) return Results.Unauthorized();

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

app.MapPost("/api/certificates/{code}/approve", async (string code, DecisionRequest? decision, HttpContext http, AppDbContext context) =>
{
    if (!ValidateAdmin(http)) return Results.Unauthorized();

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

app.MapPost("/api/certificates/{code}/reject", async (string code, DecisionRequest? decision, HttpContext http, AppDbContext context) =>
{
    if (!ValidateAdmin(http)) return Results.Unauthorized();

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

static bool ValidateAdmin(HttpContext http)
{
    if (!http.Request.Headers.TryGetValue("X-Admin-Key", out var key)) return false;
    var adminKey = Environment.GetEnvironmentVariable("ADMIN_KEY") ?? "secret-admin-key-123"; 
    return key == adminKey;
}

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
    c.Attachments ?? new List<string>(),
    c.DecisionNote,
    c.AiAnalysisResult);

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

public static class TextExtractor
{
    public static string Extract(string base64, string fileName)
    {
        try
        {
            // Remove header if present
            if (base64.Contains(",")) base64 = base64.Split(',')[1];
            
            var bytes = Convert.FromBase64String(base64);
            var ext = Path.GetExtension(fileName).ToLower();

            using var stream = new MemoryStream(bytes);

            if (ext == ".pdf")
            {
                using var document = PdfDocument.Open(stream);
                var text = new StringBuilder();
                foreach (var page in document.GetPages())
                {
                    text.Append(page.Text);
                    text.Append(" ");
                }
                return text.ToString();
            }
            else if (ext == ".docx")
            {
                using var doc = WordprocessingDocument.Open(stream, false);
                return doc.MainDocumentPart?.Document.Body?.InnerText ?? "";
            }
            else if (ext == ".txt")
            {
                return Encoding.UTF8.GetString(bytes);
            }
            
            return "";
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error extracting text: {ex.Message}");
            return "";
        }
    }
}

public class AiOrNotService
{
    private readonly HttpClient _httpClient;
    private const string ApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRhNDI1NGMxLTEzYmYtNDYzYy1hYmJlLTcwMDUyMTgzOWM2OCIsInVzZXJfaWQiOiI1OWU4MDY2OS1hN2UyLTQ3MTMtOGRkMy03ZDRmNmM1MDgyNjciLCJhdWQiOiJhY2Nlc3MiLCJleHAiOjE5MjI5MTg0MDAsInNjb3BlIjoiYWxsIn0.vV7IYEpcjUcwqk7orpCgMqaCVeIOMF5EBffXAOaRqLE";

    public AiOrNotService(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.BaseAddress = new Uri("https://api.aiornot.com/");
        _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", ApiKey);
    }

    public async Task<string?> AnalyzeImageAsync(string base64Image)
    {
        try
        {
            if (base64Image.Contains(","))
            {
                base64Image = base64Image.Split(',')[1];
            }

            var payload = new { object_url = "", object_base64 = base64Image };
            var response = await _httpClient.PostAsJsonAsync("v1/reports/image", payload);
            
            if (response.IsSuccessStatusCode)
            {
                var result = await response.Content.ReadFromJsonAsync<AiOrNotResponse>();
                return FormatResult(result);
            }
            return $"Error: {response.StatusCode}";
        }
        catch (Exception ex)
        {
            return $"Exception: {ex.Message}";
        }
    }

    public async Task<string?> AnalyzeTextAsync(string text)
    {
        try
        {
            var payload = new { text = text };
            var response = await _httpClient.PostAsJsonAsync("v1/reports/text", payload); 

            if (response.IsSuccessStatusCode)
            {
                var result = await response.Content.ReadFromJsonAsync<AiOrNotResponse>();
                return FormatResult(result);
            }
            return $"Error: {response.StatusCode}";
        }
        catch (Exception ex)
        {
            return $"Exception: {ex.Message}";
        }
    }

    private string FormatResult(AiOrNotResponse? result)
    {
        if (result?.report == null) return "No result";
        var aiScore = result.report.ai?.confidence ?? 0;
        var humanScore = result.report.human?.confidence ?? 0;
        var verdict = result.report.is_ai ? "AI DETECTED" : "HUMAN";
        return $"{verdict} (AI: {aiScore:P1}, Human: {humanScore:P1})";
    }

    private class AiOrNotResponse
    {
        public Report? report { get; set; }
    }

    private class Report
    {
        public bool is_ai { get; set; }
        public Confidence? ai { get; set; }
        public Confidence? human { get; set; }
    }

    private class Confidence
    {
        public float confidence { get; set; }
    }
}
