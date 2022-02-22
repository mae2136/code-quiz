var mainHeaderDiv = document.querySelector("#mainHeader");
var startButton = document.querySelector("#startButton");
var information = document.querySelector("#information");
var possibleAnswers = document.querySelector("#answer");
var answerListDisplay = document.querySelector("#answerList");
var answerList = document.querySelectorAll("button.answer");
console.log(mainHeaderDiv);
console.log(answerList);

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
// Tracks how many questions have been asked.
var questionCounter;

console.log(answers);

// Event Listener for Start Button
startButton.addEventListener("click", startQuiz);

// Starts quiz on start button click.
function startQuiz(event) {
    questionCounter = 0;    
    // Remove start button
    startButton.style.display = "none";
    // Replace initial page text with first question
    answerListDisplay.style.display = "block";
    questionCounter = showQuestion(questionCounter);
    // Start timer (interval) for 60 seconds
}

// Shows a quiz question based on which question was previously answered
function showQuestion(questionCounter) {
    switch (questionCounter) {
        case 0:
            mainHeaderDiv.textContent = questionHeader[questionCounter];
            information.textContent = question[questionCounter];
            questionCounter++;
            for (let i = 0; i < answerList.length; i++) {
                answerList[i].textContent = answers.question1[i];
                console.log(answerList[i]);
            }
            break;
        case 1:
            mainHeaderDiv.textContent = questionHeader[questionCounter];
            information.textContent = question[questionCounter];
            for (let i = 0; i < answerList.length; i++) {
                answerList[i].textContent = answers.question2[i];
                console.log(answerList[i]);
            }
            questionCounter++;
            break;
        case 2:
            mainHeaderDiv.textContent = questionHeader[questionCounter];
            information.textContent = question[questionCounter];
            for (let i = 0; i < answerList.length; i++) {
                answerList[i].textContent = answers.question3[i];
                console.log(answerList[i]);
            }
            questionCounter++;
            break;
        case 3:
            mainHeaderDiv.textContent = questionHeader[questionCounter];
            information.textContent = question[questionCounter];
            for (let i = 0; i < answerList.length; i++) {
                answerList[i].textContent = answers.question4[i];
                console.log(answerList[i]);
            }
            questionCounter++;
            break;
        case 4:
            mainHeaderDiv.textContent = questionHeader[questionCounter];
            information.textContent = question[questionCounter];
            for (let i = 0; i < answerList.length; i++) {
                answerList[i].textContent = answers.question5[i];
                console.log(answerList[i]);
            }
            questionCounter++;
            break;
        default:
            break;
    }
    return questionCounter;
}
// Check answer for right or wrong (click eventlistener)
answerListDisplay.addEventListener("click", checkAnswer);

// Reduce timer by 10 seconds if answer is incorrect
// Proceed to the next each question regardless of answer
function checkAnswer(event) {
    console.log(event.target);
    console.log(questionCounter);
}

// If timer = 0, ask user to input initials with score of 0
// After final question, ask user to input initials
// Open new page to display score
// Store score and name in local storage
// New page button leads back to main page