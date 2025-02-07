using Wedding.Enum;

namespace Wedding.Models;

public class People
{
    public Guid Id { get; init; }
    public required string Name { get; init; }
    public required bool Status { get; init; }
    public Alcohol Alcohol { get; init; }
    public string? Information { get; init; }
}