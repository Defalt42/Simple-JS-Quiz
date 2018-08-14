function Quiz(questions) {
  this.score = 0;
  this.questionIndex = 0;
  this.questions = questions;
}

Quiz.prototype.getScore = function() {
    return this.score;
};

Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.questionIndex];
};

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
};

Quiz.prototype.guess = function(answer) {
  // console.log(this.getCurrentQuestion());
  if(this.getCurrentQuestion().correctAnswer(answer)) {
    this.score++;
  }

  this.questionIndex++;
};
