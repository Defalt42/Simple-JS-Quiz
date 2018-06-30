let button = document.querySelector('button');
let questions = document.querySelectorAll('label');
let questionOneAnswer = "anakin skywalker";
let questionTwoAnswer = "revenge of the sith";
let questionThreeAnswer = "luke skywalker";

function grade() {
  let questionOneChoices = document.querySelectorAll('input[name="answer1"]');
  let questionTwoChoices = document.querySelectorAll('input[name="answer2"]');
  let questionThreeChoices = document.querySelectorAll('input[name="answer3"]');

  for (let i = 0; i < questionOneChoices.length; i++) {
    if (questionOneChoices[i].checked) {
      let questionOneId = questionOneChoices[i].id;
      questions.forEach(function(question) {
        if(question.htmlFor == questionOneId) {
          if(question.textContent.toLowerCase() == questionOneAnswer) {
            console.log(question.textContent + ' is correct!');
            question.innerHTML += " - Correct!";
          } else {
            console.log(question.textContent + ' is incorrect!');
            question.innerHTML += " - incorrect!";
          }
        }
      });
    }
  }
  for (let i = 0; i < questionTwoChoices.length; i++) {
    if (questionTwoChoices[i].checked) {
      let questionTwoId = questionTwoChoices[i].id;
      questions.forEach(function(question) {
        if(question.htmlFor == questionTwoId) {
          if(question.textContent.toLowerCase() == questionTwoAnswer) {
            console.log(question.textContent + ' is correct!');
            question.innerHTML += " - Correct!";
          } else {
            console.log(question.textContent + ' is incorrect!');
            question.innerHTML += " - Incorrect!";
          }
        }
      });
    }
  }
  for (let i = 0; i < questionThreeChoices.length; i++) {
    if (questionThreeChoices[i].checked) {
      let questionThreeId = questionThreeChoices[i].id;
      questions.forEach(function(question) {
        if(question.htmlFor == questionThreeId) {
          if(question.textContent.toLowerCase() == questionThreeAnswer) {
            console.log(question.textContent + ' is correct!');
            question.innerHTML += " - Correct!";
          } else {
            console.log(question.textContent + ' is incorrect!');
            question.innerHTML += " - Incorrect!";
          }
        }
      });
    }
  }
}
button.addEventListener("click", grade);
