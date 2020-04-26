using ISensor.WebAPI.Model;
using Microsoft.EntityFrameworkCore;
namespace ISensor.WebAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options){}

        public DbSet<Sensor> Sensores { get; set; }
    }
}