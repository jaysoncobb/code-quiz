//Questions variable;
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: 2
    },
    {
        title:"The Conditions in and if / else statement is enclosed within____.", 
        choices: ["quotes", "curly brackets", "quotes", "parentheses"],
        answer: 2
    }, 
    {
        title: "Array in JavaScript can be used to store___.", 
        choices: ["commas", "curly brackets", " quotes", "parentheses"],
        answer: 3
    }, 
    {
        title: "String values must be enclosed within____ when being assigned to variables.", 
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"], 
        answer: 3
    }
];

//Var list:
var score = 0; // final score based on time left
var counter = 0; // Spot in the question array 
var questionChoices = document.querySelector(".questionChoices"); //Question choices
var startBtn = document.getElementById("startBtn"); // start button
var userInput =[]; //
var timeLeft = 75 // start time 
var holdInterval;
var penalty = 10; // reduce time
// Start the quiz when start button is clicked
function startQuiz() {
    hideWelcome();
    questionDisplay();
    // TimeRanges();
}

//Timer Function
function timer() {
    var timeInterval = setInterval(function() {

    })

}

//Reduce time by 10 seconds if question is wrong

// Hides the welcome screen when start button is clicked
function hideWelcome() {
    document.getElementById("Welcome-Page").style.display ="none";
}

// Create new questions when question is answered
//Provide questions

function questionDisplay() 
{if (questions[counter]) {
    document.getElementById("questionText").textContent = questions[counter].title;
    document.getElementById("optionA").textContent = questions[counter].choices[0];
    document.getElementById("optionB").textContent = questions[counter].choices[1];
    document.getElementById("optionC").textContent = questions[counter].choices[2];
    // document.getElementById("optionD").textContent = questions[counter].choices[3];
    counter++ 
}
else{
//End the quiz when all question are answered / when timer hits 0
//Prompt user to enter initials 
//Save score as remaining time with provided initials

}
}

console.log(questions[3].title)

//Add start button event listener
startBtn.addEventListener("click", startQuiz);
questionChoices.addEventListener("click",questionDisplay);