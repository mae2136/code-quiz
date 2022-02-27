var mainHeaderDiv = document.querySelector("#mainHeader");
var startButton = document.querySelector("#startButton");
var information = document.querySelector("#information");
var possibleAnswers = document.querySelector("#answer");
var answerListDisplay = document.querySelector("#answerList");
var answerList = document.querySelectorAll("button.answer");
var timerEl = document.getElementById("timer");
const messageDiv = document.createElement("div");
const correct = document.createTextNode("Correct!");
const lose = document.createTextNode("Wrong!");
var scoreText = document.getElementById("scoreText");
var storage = {
    Initials: [],
    Score: [],
};

localStorage.setItem("scoreHistory", JSON.stringify(storage));

// Array of Question Headers
var questionHeader = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"];
// Array of Questions
var question = ["Which of these is not an option for the display CSS feature?", "What API allows you to pull from a Javascript library?", "Which is the operator for equal value and equal type?", "What syntax returns a random number?", "Which method traverses to an element with an id of mainText?"];
// Object with multiple choice answers per question in arrays
var answers = {
    question1: [`flexbox`, `block`, `inline`, `flipbox`],
    question2: [`JQuery`, `Moment.js`, `day.js`, `Bootstrap`],
    question3: [`==`, `=`, `===`, `>=`],
    question4: [`Math.random()`, `random()`, `Math()`, `Math.floor()`],
    question5: [`querySelector(.mainText)`, `getElementByID(mainText)`, `createElement(mainText)`, `createTextNode(#mainText)`],
    answerKey: [`flipbox`, `JQuery`, `===`, `Math.random()`, `getElementByID(mainText)`],
}

// Tracks how many questions have been asked.
var questionCounter;
var secondsLeft = 60;
var timerInterval;

// Event Listener for Start Button
startButton.addEventListener("click", startQuiz);

// Check answer for right or wrong (click eventlistener)
answerListDisplay.addEventListener("click", checkAnswer);

// Store score and name in local storage
scoreText.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Scored", event.target);
});

// Starts quiz on start button click.
function startQuiz() {
    questionCounter = 0;
    // Remove start button
    startButton.style.display = "none";
    // Replace initial page text with first question
    answerListDisplay.style.display = "block";
    questionCounter = showQuestion(questionCounter);
    // Start timer (interval) for 60 seconds
    startTimer(secondsLeft);
}

function startTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left.";
        // If timer = 0, ask user to input initials with score of 0
        if (secondsLeft === 0) {
            score(timerInterval, secondsLeft);
        }
    }, 1000);
}

// Shows a quiz question based on which question was previously answered
function showQuestion(questionCounter) {
    switch (questionCounter) {
        case 0:
            mainHeaderDiv.textContent = questionHeader[questionCounter];
            information.textContent = question[questionCounter];
            for (let i = 0; i < answerList.length; i++) {
                answerList[i].textContent = answers.question1[i];
            }
            break;
        case 1:
            mainHeaderDiv.textContent = questionHeader[questionCounter];
            information.textContent = question[questionCounter];
            for (let i = 0; i < answerList.length; i++) {
                answerList[i].textContent = answers.question2[i];
            }
            break;
        case 2:
            mainHeaderDiv.textContent = questionHeader[questionCounter];
            information.textContent = question[questionCounter];
            for (let i = 0; i < answerList.length; i++) {
                answerList[i].textContent = answers.question3[i];
            }
            break;
        case 3:
            mainHeaderDiv.textContent = questionHeader[questionCounter];
            information.textContent = question[questionCounter];
            for (let i = 0; i < answerList.length; i++) {
                answerList[i].textContent = answers.question4[i];
            }
            break;
        case 4:
            mainHeaderDiv.textContent = questionHeader[questionCounter];
            information.textContent = question[questionCounter];
            for (let i = 0; i < answerList.length; i++) {
                answerList[i].textContent = answers.question5[i];
            }
            break;
        default:
            break;
    }
    questionCounter++;
    return questionCounter;
}

// Proceed to the next each question regardless of answer
function checkAnswer(event) {
    // If correct, append Correct text to bottom of list, else, append Wrong to bottom of list
    document.getElementById("buttonList").appendChild(messageDiv);
    if (event.target.innerHTML === answers.answerKey[questionCounter - 1]) {
        messageDiv.appendChild(correct);
    } else {
        messageDiv.appendChild(lose);
        secondsLeft = decreaseTimer(secondsLeft);
    }
    if (questionCounter < 5) {
        questionCounter = showQuestion(questionCounter);
    } else {
        secondsLeft = score(timerInterval, secondsLeft);
    }
    // Remove messageDiv after 1 second
    setTimeout(removeMessage, 1000);
}

// Reduce timer by 10 seconds if answer is incorrect
function decreaseTimer(secondsLeft) {
    secondsLeft -= 10;
    timerEl.textContent = secondsLeft + " seconds left.";
    console.log(secondsLeft);
    return secondsLeft;
}

function removeMessage() {
    // document.getElementById("buttonList").removeChild(messageDiv);
    messageDiv.innerHTML = "";
    return
}

function score(timerInterval, secondsLeft) {
    // Stops execution of action at set interval
    clearInterval(timerInterval);
    console.log(secondsLeft);
    // Calls function to create and append image
    timerEl.textContent = " ";
    timerEl.style.display = "none"
    mainHeaderDiv.textContent = "All Done!";
    information.textContent = `Your final score is: ${secondsLeft}`;
    answerListDisplay.style.display = "none";
    // After final question, ask user to input initials
    scoreText.style.display = "inline";
    return secondsLeft;
}

// Home Page button leads back to main page
// Display score from localstorage
// storage.Initials = JSON.parse(window.localStorage.getItem(`Initials`));
// storage.Score = JSON.parse(window.localStorage.getItem(`Score`));

// window.open("https://mae2136.github.io/code-quiz/");