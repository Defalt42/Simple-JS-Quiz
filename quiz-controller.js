function Quiz(questions) {
  this.score = 0;
  this.questionIndex = 0;
  this.questions = questions;
}

Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}

Quiz.prototype.guess = function(answer) {
  if(this.getCurrentQuestion().correctAnswer(answer)) {
    this.score++;
  }

  this.questionIndex++;
}
