using lab2.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Diagnostics;
namespace lab2.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Manual()
        {
            if (Request.Method == "POST")
            {
                try
                {
                    var calc = new CalcModel
                    {
                        X = Int32.Parse(HttpContext.Request.Form["x"]),
                        operation = HttpContext.Request.Form["operation"],
                        Y = Int32.Parse(HttpContext.Request.Form["y"])
                    };

                    ViewData["Result"] = calc.Calc();
                }
                catch
                {
                    ViewData["Result"] = "Invalid input";
                }

                return View("Result");
            }
            return View("Calc");
        }

        [HttpGet]
        [ActionName("ManualWithSeparateHandlers")]
        public IActionResult ManualWithSeparateHandlersGet()
        {
            return View("Calc");
        }

        [HttpPost]
        [ActionName("ManualWithSeparateHandlers")]
        public IActionResult ManualWithSeparateHandlersPost()
        {
            try
            {
                var calc = new CalcModel
                {
                    X = Int32.Parse(HttpContext.Request.Form["x"]),
                    operation = HttpContext.Request.Form["operation"],
                    Y = Int32.Parse(HttpContext.Request.Form["y"])
                };

                ViewData["Result"] = calc.Calc();
            }
            catch
            {
                ViewData["Result"] = "Invalid input";
            }

            return View("Result");
        }

        [HttpGet]
        [ActionName("ModelBindingInParameters")]
        public IActionResult ModelBindingInParametersGet()
        {
            return View("Calc");
        }

        [HttpPost]
        [ActionName("ModelBindingInParameters")]
        public IActionResult ModelBindingInParametersPost(int x, string operation, int y)
        {
            if (ModelState.IsValid)
            {
                var calc = new CalcModel
                {
                    X = x,
                    Y = y,
                    operation = operation
                };
                
                ViewData["Result"] = calc.Calc();
            }
            else
            {
                ViewData["Result"] = "Invalid input";
            }

            return View("Result");
        }

        [HttpGet]
        [ActionName("ModelBindingInSeparateModel")]
        public IActionResult ModelBindingInSeparateModelGet()
        {
            return View("Calc");
        }

        [HttpPost]
        [ActionName("ModelBindingInSeparateModel")]
        public IActionResult ModelBindingInSeparateModelPost(CalcModel model)
        {
            if (ModelState.IsValid)
            {
                ViewData["Result"] = model.Calc();
            }
            else
            {
                ViewData["Result"] = "Invalid input";
            }

            return View("Result");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
