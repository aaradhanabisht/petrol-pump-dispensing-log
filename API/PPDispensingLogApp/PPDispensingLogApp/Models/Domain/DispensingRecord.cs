
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using PPDispensingLogApp.Models.Enum;

public class DispensingRecord
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public DispenserNoEnum DispenserNo { get; set; }
    public decimal QuantityFilled { get; set; }
    public string VehicleNumber { get; set; }
    public PaymentModeEnum PaymentMode { get; set; }
    public string PaymentProofFilePath { get; set; }
    public DateTime Timestamp { get; set; }
}

