using System.ComponentModel.DataAnnotations;

namespace CertifyHuman.Api.DTOs;

public record CertificateRequest(
    [property: Required] string Title,
    [property: Required] string Creator,
    [property: Required, EmailAddress] string Email,
    [property: Required] string Type,
    string? Description,
    [property: Required] string AiUsage,
    IEnumerable<string>? Attachments
);

public record CertificateResponse(
    string Code,
    string Title,
    string Creator,
    string Email,
    string Type,
    string? Description,
    string AiUsage,
    string Status,
    DateTime CreatedAt,
    IEnumerable<string> Attachments
);

public record CertificateCreatedResponse(string Code, string Status, string PaymentLink, string PaymentId);

public record PaymentWebhookRequest(
    [property: Required] string PaymentId,
    string? Provider,
    string? RawPayload
);

public record DecisionRequest(string? Note);
