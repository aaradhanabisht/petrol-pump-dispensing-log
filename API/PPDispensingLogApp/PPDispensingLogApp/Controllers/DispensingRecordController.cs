using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PPDispensingLogApp.Models.DTO;
using PPDispensingLogApp.Repositories.Interface;

namespace PPDispensingLogApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DispensingRecordController : ControllerBase
    {
        private readonly IDispensingRecordRepository dispensingRecordRepository;

        public DispensingRecordController(IDispensingRecordRepository dispensingRecordRepository)
        {
            this.dispensingRecordRepository = dispensingRecordRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllRecords()
        {
            var records = await dispensingRecordRepository.GetAllAsync();

            var response = new List<DispensingRecordDTO>();
            foreach (var record in records)
            {
                response.Add(new DispensingRecordDTO
                {
                    Id = record.Id,
                    DispenserNo = record.DispenserNo,
                    PaymentMode = record.PaymentMode,
                    QuantityFilled = record.QuantityFilled,
                    VehicleNumber = record.VehicleNumber,
                    PaymentProofUrl = $"{Request.Scheme}://{Request.Host}/Images/{record.PaymentProofFilePath.Replace("\\", "/")}",
                    Timestamp = record.Timestamp,
                });

            }

            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> CreateDispensingRecord([FromForm] DispensingRecordCreateDTO recordCreateDTO)
        {
            string? filePath = null;
            string? fullFilePath = null;

            try
            {
                if (recordCreateDTO.PaymentProof != null && recordCreateDTO.PaymentProof.Length > 0)
                {
                    var uploadDir = Path.Combine(Directory.GetCurrentDirectory(), "Images", "PaymentProofs");
                    if (!Directory.Exists(uploadDir))
                    {
                        Directory.CreateDirectory(uploadDir);
                    }

                    var uniqueFilename = Guid.NewGuid() + Path.GetExtension(recordCreateDTO.PaymentProof.FileName);
                    fullFilePath = Path.Combine(uploadDir, uniqueFilename);

                    using (var stream = new FileStream(fullFilePath, FileMode.Create))
                    {
                        await recordCreateDTO.PaymentProof.CopyToAsync(stream);
                    }

                    filePath = Path.Combine("PaymentProofs", uniqueFilename).Replace('\\', '/');
                }

                var record = new DispensingRecord
                {
                    DispenserNo = recordCreateDTO.DispenserNo,
                    QuantityFilled = recordCreateDTO.QuantityFilled,
                    PaymentMode = recordCreateDTO.PaymentMode,
                    PaymentProofFilePath = filePath != null ? filePath : "",
                    VehicleNumber = recordCreateDTO.VehicleNumber,
                    Timestamp = DateTime.Now,
                };

                await dispensingRecordRepository.AddAsync(record);

                return Ok();
            }
            catch (Exception)
            {
                if(fullFilePath != null && System.IO.File.Exists(fullFilePath))
                {
                    System.IO.File.Delete(fullFilePath);
                }   

                return StatusCode(500);
            }
        }

    }
}
