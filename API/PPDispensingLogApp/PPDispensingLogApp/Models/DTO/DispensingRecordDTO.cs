using PPDispensingLogApp.Models.Enum;

namespace PPDispensingLogApp.Models.DTO
{
    public class DispensingRecordDTO
    {
        public int Id { get; set; }
        public DispenserNoEnum DispenserNo { get; set; }
        public decimal QuantityFilled { get; set; }
        public string VehicleNumber { get; set; }
        public PaymentModeEnum PaymentMode { get; set; }
        public string PaymentProofUrl { get; set; }
        public DateTime Timestamp { get; set; }
    }
}
