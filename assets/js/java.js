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
const submit = document.getElementById("submit-initials");
const highScore = document.getElementById("high-scores");
const goBack = document.getElementById ("go-back");
const viewScore = document.getElementById("view-scores");
const clearScores = document.getElementById("clear");
const scoreList = document.getElementById("score-list");
const correctAnswer = document.getElementById("correct");
const wrongAnswer = document.getElementById("wrong");

var time = 75;
var score = 0;

var startGame = false;

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

//run the timer
    var x = setInterval(function() { 
        if (startGame === true){
        time--
        }
        timer.innerHTML = "<h3>Timer: " + time + "<h3>";

        if (time === 0) {
            alert("You ran out of time. The game is over!")
            clearInterval(x)
        }
    }, 1000);
 
function renderQuestion() {
        quiz.removeAttribute('class')
        title.setAttribute('class', 'hide')
        description.setAttribute('class', 'hide')
        start.setAttribute('class', 'hide') 
       

       var q = allQuestions[runningQuestionIndex];

        //run end game function in input high score
       if (q === undefined){
           endGame()
       }
       else {
        question.innerHTML = "<h1>" + q.question + "<h1>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
       }
  };


  //end game so user can put in high score
function endGame() {
    quiz.setAttribute('class', 'hide')
    end.removeAttribute('class', 'hide')
    //console.log(submit);

    startGame = false;

    const finalScore = document.getElementById("final-score");
    finalScore.innerHTML = "<p>You're final score is " + score + ".<p>";
    
    submit.addEventListener("click", function(event) {
        event.preventDefault();
       
        var userInitials = document.getElementById("initials").value;
        if (userInitials.length > 0){
            document.getElementById("score-list").value = userInitials
            var save = {
                id: userInitials,
                timer: time
            }
            var highScores = JSON.parse(localStorage.getItem("scores"))
            if (highScores != undefined) {
                highScores[highScores.length] = save
                localStorage.setItem("scores", JSON.stringify(highScores))
            }
            else {
                var highScores = [save]
                localStorage.setItem("scores", JSON.stringify(highScores))
            }
            
        }

        if (userInitials === "") {
            displayMessage("error", "You must enter your initials");
        } else {
            displayHighScores();
        }
       
        var getScore = JSON.parse(localStorage.getItem("scores"))
        if (getScore != undefined) {
            for (var i = 0; i < getScore.length; i++) {
                var scoreItem = getScore[i]
                var listItem = document.createElement("li")
                listItem.classList.add("score-list-item")
                listItem.textContent = scoreItem.id + ": " + scoreItem.timer
                document.getElementById("score-list").appendChild(listItem)
            }
        }
    })

}

//grab the user input of initials
function displayHighScores() {

    end.setAttribute('class', 'hide')
    highScore.removeAttribute('class', 'hide')

    startGame = false;

}

//clear High Scores
function clearHighScores () {
    var items = document.getElementsByClassName("score-list-item");
    for (var i=0; i <items.length; i++){
        items[i].remove();
    }

    localStorage.removeItem("scores")
}

//check if question is correct
function checkAnswer(answer) {
   //console.log(runningQuestionIndex)
    //console.log(answer, allQuestions[runningQuestionIndex].correct) 

   if (answer === allQuestions[runningQuestionIndex].correct) {
       //console.log (allQuestions[runningQuestionIndex].correct)
        correctAnswer.removeAttribute('class', 'hide')
       //alert("Correct!")
       score += 10;
       runningQuestionIndex++
        renderQuestion();
    }
    else {
        //wrongAnswer.removeAttribute('class', 'hide')
        //alert("Wrong")
        time -= 10;
    }
};

//call function when user presses start button
start.addEventListener("click", function(){
    renderQuestion()
    startGame = true;
});

goBack.addEventListener("click", function(){
    highScore.setAttribute('class', 'hide')
    title.setAttribute('class', 'title')
    title.setAttribute('id', 'title')
    description.setAttribute('class', 'description')
    description.setAttribute('id', 'description')
    start.setAttribute('class', 'btn')
    start.setAttribute('id', 'start')
})

clearScores.addEventListener("click", function(){
    clearHighScores()
})

viewScore.addEventListener("click", function(){
   title.setAttribute('class', 'hide')
   description.setAttribute('class', 'hide')
   start.setAttribute('class', 'hide')
    displayHighScores()
})