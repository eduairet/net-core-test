using Microsoft.AspNetCore.Mvc;

namespace net_core_test.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
