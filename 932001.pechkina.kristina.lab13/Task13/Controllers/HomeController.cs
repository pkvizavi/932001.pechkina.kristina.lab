using lab3.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace lab3.Controllers
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

        static readonly QuizModel quiz = new QuizModel();

        public IActionResult Quiz()
        {
            quiz.SetRandomValues();
            ViewBag.Question = quiz.question;
            return View();
        }

        public IActionResult QuizResult()
        {
            ViewBag.RightAnswersCount = quiz.rightAnswersCount;
            ViewBag.AnswersCount = quiz.answersCount;
            ViewBag.Results = quiz.Results;
            return View();
        }

        [HttpPost]
        public IActionResult QuizNext(int answer)
        {
            quiz.UppdateResults(answer);
            quiz.SetRandomValues();
            ViewBag.Question = quiz.question;
            return View("Quiz");
        }

        public IActionResult QuizFinish(int answer)
        {
            quiz.UppdateResults(answer);
            ViewBag.RightAnswersCount = quiz.rightAnswersCount;
            ViewBag.AnswersCount = quiz.answersCount;
            ViewBag.Results = quiz.Results;
            return View("QuizResult");
        }
    }
}
