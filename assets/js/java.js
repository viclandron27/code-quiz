const title = document.getElementById("title");
const description = document.getElementById ("description");
const start = document.getElementById("start");
const quiz = document.getElementById("question-container");
const question = document.getElementById("question");  
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const timer = document.getElementById("timer");
const end = document.getElementById("end-game");

 //var lastQuestionIndex = allQuestions.length - 1;
 var runningQuestionIndex = 0;

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
        question : "Arrays in JavaScript can be used to store __________.",
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

// timer counting down from 75

 
function renderQuestion() {
        quiz.removeAttribute('class')
        title.setAttribute('class', 'hide')
        description.setAttribute('class', 'hide')
        start.setAttribute('class', 'hide')

        //call the function to run the timer
        var x = setInterval(function() {
            var time = 75;
            timer.innerHTML = "<h3>Timer: " + time + "<h3>";
        }, 1000);


        console.log(timer);

       var q = allQuestions[runningQuestionIndex];
       question.innerHTML = "<h1>" + q.question + "<h1>";
       choiceA.innerHTML = q.choiceA;
       choiceB.innerHTML = q.choiceB;
       choiceC.innerHTML = q.choiceC;
       choiceD.innerHTML = q.choiceD;
  };

//end game so user can put in high score
function endGame() {
    quiz.setAttribute('class')
    end.removeAttribute('class', 'hide')



}

//check if question is correct
function checkAnswer(answer) {
   console.log(runningQuestionIndex)
    console.log(answer, allQuestions[runningQuestionIndex].correct) 
   if (answer === allQuestions[runningQuestionIndex].correct) {
       //console.log (allQuestions[runningQuestionIndex].correct)
       alert("Correct!")
       runningQuestionIndex++
        renderQuestion();
    }
    else {
        alert("Wrong")
        //add time reduction
    }
};

//call function when user presses start button
start.addEventListener("click", function(){
    renderQuestion()
});


 