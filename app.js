function populateQuestions() {

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
  "Anakin Skywalker"),
];

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
