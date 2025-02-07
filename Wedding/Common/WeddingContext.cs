using Microsoft.EntityFrameworkCore;
using Wedding.Models;

namespace Wedding.Common;

public class WeddingContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<People> People { get; set; }
}