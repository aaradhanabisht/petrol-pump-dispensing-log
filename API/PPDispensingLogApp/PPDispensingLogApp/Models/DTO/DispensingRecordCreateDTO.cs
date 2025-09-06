using PPDispensingLogApp.Models.Enum;

namespace PPDispensingLogApp.Models.DTO
{
    public class DispensingRecordCreateDTO
    {
        public DispenserNoEnum DispenserNo { get; set; }
        public decimal QuantityFilled { get; set; }
        public string VehicleNumber { get; set; }
        public PaymentModeEnum PaymentMode { get; set; }
        public IFormFile PaymentProof { get; set; }
    }
}
