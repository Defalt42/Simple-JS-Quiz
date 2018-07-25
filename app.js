function populateQuestion() {
  if(quiz.isEnded()) {
    // display score
  } else {
    // display question
    var qElement = document.getElementById('question');
    qElement.innerHTML = quiz.getCurrentQuestion().text;

    // display choices
    var choices = quiz.getCurrentQuestion().choices;
    for(var i = 0; i < choices.length; i++) {
      var choice = document.getElementById('c' + i);
      choice.innerHTML = choices[i];
    }
  }
}

var questions = [
  new Question("Who is Darth Vader?",
  ["Luke Skywalker", "Anakin Skywalker", "Your Mom", "Your Dad"],
  "Anakin Skywalker"),
  new Question("What is the name of the third episode?",
  ["Revenge of the Sith", "Return of the Jedi", "A New Hope", "Attack of the Clones"],
  "Revenge of the Sith"),
  new Question("Who is Anakin Skywalker's son?",
  ["Luke Skywalker", "Anakin Skywalker", "Your Mom", "Your Dad"],
  "Anakin Skywalker"),
  new Question("What is the name of the sixth episode?",
  ["Luke Skywalker", "Anakin Skywalker", "Your Mom", "Your Dad"],
  "Anakin Skywalker")
];

var quiz = new Quiz(questions);

populateQuestion();
// questions.forEach(function(question) {
//   console.log("Question: " + question.text + "\nAnswer: " + question.answer
//   + "\nChoice: Luke Skywalker" + "(" + question.correctAnswer("Anakin Skywalker")
//   + ")");
// });
//
// var quiz = new Quiz(questions);
//
// console.log(quiz.getCurrentQuestion());
//
// quiz.guess("Anakin Skywalker");
//
// console.log(quiz.score);
// console.log(quiz.getCurrentQuestion());
