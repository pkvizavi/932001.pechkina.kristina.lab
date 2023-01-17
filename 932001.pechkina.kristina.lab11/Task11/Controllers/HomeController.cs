using lab1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace lab1.Controllers
{
    public class HomeController : Controller
    {
        private readonly Random _random = new Random();
        public readonly int a;
        public readonly int b;
        public readonly string add;
        public readonly string sub;
        public readonly string mult;
        public readonly string div;

        public HomeController()
        {
            a = _random.Next(0, 11);
            b = _random.Next(0, 11);
            add = $"{a} + {b} = {a + b}";
            sub = $"{a} - {b} = {a - b}";
            mult = $"{a} * {b} = {a * b}";
            if (b == 0)
            {
                div = "Error! Division by zero!";
            }
            else
            {
                div = $"{a} / {b} = {(double)a / (double)b}";
            }
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult PassUsingModel()
        {
            var calcModel = new CalcModel(a, b, add, sub, mult, div);
            return View(calcModel);
        }

        public IActionResult PassUsingViewData()
        {
            ViewData["a"] = a;
            ViewData["b"] = b;
            ViewData["add"] = add;
            ViewData["dif"] = sub;
            ViewData["mult"] = mult;
            ViewData["div"] = div;
            return View();
        }

        public IActionResult PassUsingViewBag()
        {
            ViewBag.a = a;
            ViewBag.b = b;
            ViewBag.add = add;
            ViewBag.sub = sub;
            ViewBag.mult = mult;
            ViewBag.div = div;
            return View();
        }

        public IActionResult AccessServiceDirectly()
        {
            return View(this);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
