using Microsoft.EntityFrameworkCore;
using PPDispensingLogApp.Data;
using PPDispensingLogApp.Repositories.Interface;

namespace PPDispensingLogApp.Repositories.Implementation
{
    public class DispensingRecordRepository : IDispensingRecordRepository
    {
        private readonly ApplicationDbContext dbContext;
        public DispensingRecordRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<DispensingRecord> AddAsync(DispensingRecord record)
        {
            await dbContext.DispensingRecords.AddAsync(record);
            await dbContext.SaveChangesAsync();

            return record;
        }

        public async Task<IEnumerable<DispensingRecord>> GetAllAsync()
        {
            return await dbContext.DispensingRecords.ToListAsync();
        }
    }
}
