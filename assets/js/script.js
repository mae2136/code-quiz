var mainHeaderDiv = document.querySelector("#mainHeader");
var startButton = document.querySelector("#startButton");
var information = document.querySelector("#information");
var possibleAnswers = document.querySelector("#answer");
console.log(mainHeaderDiv);
console.log(startButton);

startButton.addEventListener("click", startQuiz);

function startQuiz(event) {
    console.log("hello world");
    mainHeaderDiv.textContent = "";
    information.textContent = "";
    startButton.style.display = "none";
}