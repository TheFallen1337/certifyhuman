using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CertifyHuman.Api.Models;

[Index(nameof(Code), IsUnique = true)]
public class Certificate
{
    public Guid Id { get; set; }

    [Required]
    [MaxLength(32)]
    public string Code { get; set; } = string.Empty;

    [Required]
    [MaxLength(256)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [MaxLength(256)]
    public string Creator { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    [MaxLength(256)]
    public string Email { get; set; } = string.Empty;

    [Required]
    [MaxLength(64)]
    public string Type { get; set; } = string.Empty;

    [MaxLength(2048)]
    public string? Description { get; set; }

    [Required]
    [MaxLength(32)]
    public string AiUsage { get; set; } = string.Empty;

    [Required]
    [MaxLength(32)]
    public string Status { get; set; } = "pending_payment";

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [MaxLength(128)]
    public string? PaymentId { get; set; }

    [Column(TypeName = "jsonb")]
    public List<string> Attachments { get; set; } = new();

    [MaxLength(2048)]
    public string? DecisionNote { get; set; }

    [MaxLength(2048)]
    public string? AiAnalysisResult { get; set; }
}
