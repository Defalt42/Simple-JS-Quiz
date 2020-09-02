function Quiz(questions) {
  this.score = 0;
  this.questionIndex = 0;
  this.questions = questions;

  this.getScore = function() { return this.score };
  this.getCurrentQuestion = function() { return this.questions[this.questionIndex]; };
  this.isEnded = function() { return this.questionIndex === this.questions.length; };
  this.guess = function(answer) {  
    if(this.getCurrentQuestion().correctAnswer(answer)) {
      this.score++;
    }

    this.questionIndex++;
  };
}
