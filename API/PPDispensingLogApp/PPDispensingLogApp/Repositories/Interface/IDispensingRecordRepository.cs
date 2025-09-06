using System.Threading.Tasks;

namespace PPDispensingLogApp.Repositories.Interface
{
    public interface IDispensingRecordRepository
    {
        Task<DispensingRecord> AddAsync(DispensingRecord record);
        //Task<DispensingRecord> GetByIdAsync(int id);
        Task<IEnumerable<DispensingRecord>> GetAllAsync();
    }
}
