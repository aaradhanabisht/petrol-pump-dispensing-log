using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PPDispensingLogApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        [HttpGet("download/{filename}")]
        [Authorize]
        public IActionResult DownloadPaymentProof(string filename)
        {
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Images", "PaymentProofs", filename);

            if (!System.IO.File.Exists(filePath))
                return NotFound();

            var contentType = "application/octet-stream";
            var fileBytes = System.IO.File.ReadAllBytes(filePath);

            return File(fileBytes, contentType, filename);
        }

    }
}
