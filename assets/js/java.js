const start = document.getElementById("start");
const quiz = document.getElementById("question-container");
const question = document.getElementById("question");  
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");


//create questions
var allQuestions = [
    { 
        question : 'Commonly used data types DO NOT include:', 
        choiceA: "1. strings",
        choiceB: "2. booleans",
        choiceC: "3. alerts",
        choiceD: "4. numbers",
        correct: "C"   
    },

    { 
        question : "The condition in an if/else statement is enclosed with ___________.",
        choiceA : "1. quotes",
        choiceB : "2. curly brackets",
        choiceC : "3. parenthesis",
        choiceD : "4. square brackets",
        correct : "C"
    },

    { 
        question : "Arrays in JavaScript ccan be used to store __________.",
        choiceA : "1. numbers and strings ",
        choiceB : "2. other arrays",
        choiceC : "3. booleans",
        choiceD : "4. all of the above",
        correct : "D"
     },

    { 
        question : "String values must be enclosed within _________ when being assigned to variables.",
        choiceA : "1. commas",
        choiceB : "2. curly brackets",
        choiceC : "3. quotes",
        choiceD : "4. parenthesis",
        correct : "C"
    },

    { 
        question : "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA : "1. Javascript",
        choiceB : "2. terminal/bash",
        choiceC : "3. for loops",
        choiceD : "4. console.log",
        correct : "D"
    }

  ];

//var lastQuestionIndex = allQuestions.length - 1;
var runningQuestionIndex = 0;

//displays to user each question
function renderQuestion(){
    console.log(allQuestions);
    var q = allQuestions[runningQuestionIndex];
    question.innerHTML = "<h1>" + q.allQuestions + "<h1>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    runningQuestionIndex++
}
   
    //renderQuestion();

//check if question is correct
function checkAnswer(answer) {
   if (allQuestions[runningQuestionIndex].correct === answer) {
       alert("Correct!")
    }
    else {
        alert("Wrong")
        //add time reduction
    }
};

start.addEventListener("click", renderQuestion());


 