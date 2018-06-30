let button = document.querySelector('button');
let labels = document.querySelectorAll('label');
let questionOneAnswer = "anakin skywalker";
let questionTwoAnswer = "revenge of the sith";
let questionThreeAnswer = "luke skywalker";

button.addEventListener("click", function(event) {
  let questionOneChoices = document.querySelectorAll('input[name="answer1"]');

  for (let i = 0; i < questionOneChoices.length; i++) {
    if (questionOneChoices[i].checked) {
      let questionOneId = questionOneChoices[i].id;
      labels.forEach(function(label) {
        if(label.htmlFor == questionOneId) {
          console.log(label.textContent.toLowerCase());
          console.log(questionOneAnswer);
          if(label.textContent.toLowerCase() == questionOneAnswer) {
            console.log(label.textContent + ' is correct!');
          } else {
            console.log(label.textContent + ' is incorrect!');
          }
        }
      });
    }
  }
});
