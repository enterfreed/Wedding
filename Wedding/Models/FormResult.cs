using Wedding.Enum;

namespace Wedding.Models;

public class FormResult
{
    public Guid Id { get; init; }
    public required string Name { get; init; }
    public required bool Status { get; init; }
    public Alcohol Alcohol { get; init; }
}