function populateQuestion() {
  console.log(quiz);
  if(quiz.isEnded()) {
    // display score
    showScore();
  } else {
    // display question
    let qElement = document.getElementById('question');
    qElement.innerHTML = quiz.getCurrentQuestion().text;

    // display choices
    let choices = quiz.getCurrentQuestion().choices;
    for(let i = 0; i < choices.length; i++) {
      let choice = document.getElementById('c' + i);
      choice.innerHTML = choices[i];
      guess("b" + i, choices[i]);
    }
    showProgress();
  }
}

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      populateQuestion();
    };
}

function showProgress() {
    let currentQuestionNum = quiz.questionIndex + 1;
    let progress = document.getElementById("progress");
    progress.innerHTML = "Question " + currentQuestionNum + " of " + quiz.questions.length;
}

function showScore() {
  let resultsHTML = "<h1>Results</h1>";
  resultsHTML += "<h2 id='score'>Your Score: " + quiz.getScore() + "</h2>";
  let q = document.getElementById("quiz");
  q.innerHTML = resultsHTML;
}

let questions = [
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
let quiz = null;
document.querySelector(".quiz-selection").addEventListener("submit", function(e) {
  e.preventDefault();
  let select = document.querySelector("select");
  let value = select.options[select.selectedIndex].value;
  console.log(value);
  if(value === "Star Wars") {
    quiz = new Quiz(questions);
   } else {
     quiz = new Quiz(questions);
   }
});
populateQuestion();



