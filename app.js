function populateQuestion() {
  if(quiz.isEnded()) {
    // display score
    showScore();
  } else {
    // display question
    var qElement = document.getElementById('question');
    qElement.innerHTML = quiz.getCurrentQuestion().text;

    // display choices
    var choices = quiz.getCurrentQuestion().choices;
    for(var i = 0; i < choices.length; i++) {
      var choice = document.getElementById('c' + i);
      choice.innerHTML = choices[i];
      guess("b" + i, choices[i]);
    }
    showProgress();
  }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      populateQuestion();
    };
}

function showProgress() {
    var currentQuestionNum = quiz.questionIndex + 1;
    var progress = document.getElementById("progress");
    progress.innerHTML = "Question " + currentQuestionNum + " of " + quiz.questions.length;
}

function showScore() {
  var resultsHTML = "<h1>Results</h1>";
  resultsHTML += "<h2 id='score'>Your Score: " + quiz.getScore() + "</h2>";
  var q = document.getElementById("quiz");
  q.innerHTML = resultsHTML;
}

var questions = [
  new Question("Who is Darth Vader?",
  ["Luke Skywalker", "Anakin Skywalker", "Your Mom", "Your Dad"],
  "Anakin Skywalker"),
  new Question("What is the name of the third episode?",
  ["Return of the Jedi", "Revenge of the Sith", "A New Hope", "The Empire Strikes Back"],
  "Revenge of the Sith"),
  new Question("Who is Anakin Skywalker's son?",
  ["Luke Skywalker", "Anakin Skywalker", "Your Mom", "Your Dad"],
  "Luke Skywalker"),
  new Question("What is the name of the sixth episode?",
  ["Return of the Jedi", "Revenge of the Sith", "A New Hope", "The Empire Strikes Back"],
  "Return of the Jedi")
];

document.querySelector(".quiz-selection").addEventListener("submit", function(e) {
  e.preventDefault();
  var select = document.querySelector("select");
  var value = select.options[select.selectedIndex].value;

  if(value === "Star Wars") {
    var quiz = new Quiz(questions);
    populateQuestion();
   }
});



