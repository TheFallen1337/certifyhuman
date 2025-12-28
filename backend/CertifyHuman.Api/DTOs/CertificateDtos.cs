using System.ComponentModel.DataAnnotations;

namespace CertifyHuman.Api.DTOs;

public record AttachmentFileDto(string Name, string Base64, string Type);

public record CertificateRequest(
    [property: Required] string Title,
    [property: Required] string Creator,
    [property: Required, EmailAddress] string Email,
    [property: Required] string Type,
    string? Description,
    [property: Required] string AiUsage,
    IEnumerable<string>? Attachments,
    List<AttachmentFileDto>? AttachmentFiles,
    string? ImageBase64,
    string? ContentText,
    string? AttachmentBase64,
    string? AttachmentFileName
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
    IEnumerable<string> Attachments,
    string? StartDecisionNote, // Renaming to avoid confusion if needed, or just keeping legacy
    string? AdminComment, // This is the new public note
    string? AiAnalysisResult
);

public record CertificateCreatedResponse(string Code, string Status, string PaymentLink, string PaymentId);

public record PaymentWebhookRequest(
    [property: Required] string PaymentId,
    string? Provider,
    string? RawPayload
);

public record DecisionRequest(string? Note, string? AdminComment);
