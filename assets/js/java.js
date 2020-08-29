var questions = [
    { 
        q: 'Commonly used data types DO NOT include:', 
        a: {
            a: "strings",
            b: ""
        }
    },
    correctAnswer: ""
    { q: 'There are 365 days in a year.', a: 't' },
    { q: 'There are 42 ounces in a pound.', a: 'f' },
    { q: 'The Declaration of Independence was created in 1745.', a: 'f' },
    { q: 'Bananas are vegetables.', a: 'f' }
  ];

  var score = 0

  for (var i = 0; i < questions.length; i++) {
    var answer = confirm(questions[i].q)
    if ((answer === true && questions[i].a === "t") || (answer === false && questions[i].a === "f")) {
        alert("You are Correct!")
        score++;
    }
    else {
        alert("You are Incorrect!")
    }

  }