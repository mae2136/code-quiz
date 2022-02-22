var mainHeaderDiv = document.querySelector("#mainHeader");
var startButton = document.querySelector("#startButton");
var information = document.querySelector("#information");
var possibleAnswers = document.querySelector("#answer");
var answerList = document.querySelector("#answerList");
console.log(mainHeaderDiv);
console.log(answerList.children);

// Array of Question Headers
var questionHeader = ["Question 1", "Question 2", "Question 3", "Question 4"];
// Array of Questions
var question = ["Which of these is not an option for the display CSS feature?", "What "]
// Object with multiple choice answers per question in arrays
var answers = {
    question1: [`flexbox`, `block`, `inline`, `flipbox`],
    question2: [`a`, `b`, `c`, `d`],
    question3: [`a`, `b`, `c`, `d`],
    question4: [`a`, `b`, `c`, `d`],
    question5: [`a`, `b`, `c`, `d`]
}

console.log(answers);

// Event Listener for Start Button
startButton.addEventListener("click", startQuiz);

// Starts quiz on start button click.
function startQuiz(event) {
    console.log("hello world");
    // Tracks how many questions have been asked.
    var questionCounter = 0;
    // Remove start button
    startButton.style.display = "none";
    // Replace initial page text with first question
    showQuestion(questionCounter);
    // Start timer (interval)
}

// Shows a quiz question based on which question was previously answered
function showQuestion(questionCounter) {
    switch (questionCounter) {
        case 0:
            mainHeaderDiv.textContent = questionHeader[questionCounter];
            information.textContent = question[questionCounter];
            questionCounter++;
            break;
        case 1:
            mainHeaderDiv.textContent = "Question 1";
            information.textContent = "Which of these is not an option for the display CSS feature?";
            questionCounter++;
            break;
        default:
            break;
    }
}
// Check answer for right or wrong (click eventlistener)
// Reduce timer by 10 seconds if answer is incorrect

// Proceed to the next each question regardless of answer

// After final question, ask user to input initials
// Open new page to display score
// Store score and name in local storage
// New page button leads back to main page