using Microsoft.AspNetCore.Mvc;

namespace net_core_test.Controllers
{
    [Route("api/[controller]/{fileName}")]
    [ApiController]
    public class PhotosController : ControllerBase
    {
        private readonly string photosFolderPath = Path.Combine(Directory.GetCurrentDirectory(), "Photos");

        [HttpGet]
        public IActionResult GetFile(string fileName)
        {
            string filePath = Path.Combine(photosFolderPath, fileName);
            if (System.IO.File.Exists(filePath))
            {
                return PhysicalFile(filePath, "image/png");
            }
            return NotFound();
        }
    }
}

