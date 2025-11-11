using CertifyHuman.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CertifyHuman.Api.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Certificate> Certificates => Set<Certificate>();
}
