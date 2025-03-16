namespace Wedding.Models;

public class FormData
{
    public required string Name { get; init; }
    public required string Status { get; init; }
    public string[] Alcohol { get; init; }
}