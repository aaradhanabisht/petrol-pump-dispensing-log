using Microsoft.EntityFrameworkCore;

namespace PPDispensingLogApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<DispensingRecord> DispensingRecords { get; set; }
    }
}
