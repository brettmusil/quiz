let selectedAnswer = "";
let numberOfCorrectAnswers = 0;
let questions = [];
let questionsIndex = 0;
let lastAnswerChose = "";

/*
function controlHTMLID(id, command) {
    if (id == "question" && command == "show") {
        document.getElementById("question").style.opacity = "1.0";
    } else {
        document.getElementById("question").style.opacity = "0.0" ;  
    }
    if (id == questionCard && command == show) {
        document.getElementById("questionCard").style.opacity = "1.0";
    } else {
        document.getElementById("questionCard").style.opacity = "0.0";
    }
    if (id == "resultsCard" && command == "show") {
        document.getElementById("resultsCard").style.opacity = "1.0";
    } else if (id == "resultsCard" && command == "hide") {
        document.getElementById("resultsCard").style.opacity = "0.0";
    }
    if (id == "answer1Card" && command == "show") {
        document.getElementById("answer1Card").style.opacity = "1.0";
    } else {
        document.getElementById("answer1Card").style.opacity = "0.0";
    }
    if (id == "answer1" && command == "show") {
        document.getElementById("answer1").style.opacity = "1.0";
    } else {
        document.getElementById("answer1").style.opacity = "0.0";
    }
    if (id == "answer2Card" && command == "show") {
        document.getElementById("answer2Card").style.opacity = "1.0";
    } else {
        document.getElementById("answer2Card").style.opacity = "0.0";
    }
    if (id == "answer2" && command == "show") {
        document.getElementById("answer2").style.opacity = "1.0";
    } else {
        document.getElementById("answer2").style.opacity = "0.0";
    }
    if (id == "answer3Card" && command == "show") {
        document.getElementByID("answer3Card").style.opacity = "1.0";
    } else {
        document.getElementById("answer3Card").style.opacity = "0.0";
    }
    if (id == "answer3" && command == "show") {
        document.getElementById("answer3").style.opacity = "1.0";
    } else {
        document.getElementById("answer3").style.opacity = "0.0";
    }
}
*/
function showNumberCorrect(){
    document.getElementById("numberCorrect").style.display = "block";
    document.getElementById("numberCorrect").style.opacity = "1.0";
}

function showResultQ1() {
    document.getElementById("question1").style.display = "block";
    document.getElementById("question1").style.opacity = "1.0";
}
function showResultQ1Result() {
    document.getElementById("result1").style.display = "block";
    document.getElementById("result1").style.opacity = "1.0";
}
function showResultQ2() {
    document.getElementById("question2").style.display = "block";
    document.getElementById("question2").style.opacity = "1.0";
}
function showResultQ2Result() {
    document.getElementById("result2").style.display = "block";
    document.getElementById("result2").style.opacity = "1.0";
}
function showResultQ3() {
    document.getElementById("question3").style.display = "block";
    document.getElementById("question3").style.opacity = "1.0";
}
function showResultQ3Result() {
    document.getElementById("result3").style.display = "block";
    document.getElementById("result3").style.opacity = "1.0";
}

function showQuestion() {
    document.getElementById("question").style.opacity = "1.0";
}

function hideQuestion() {
    document.getElementById("question").style.opacity = "0.0";
}

function hideQuestionCard() {
    document.getElementById("questionCard").style.opacity = "0.0";
}

function showQuestionCard() {
    document.getElementById("questionCard").style.opacity = "1.0";
}

function hideResultsCard() {
    document.getElementById("resultsCard").style.opacity = "0.0";
}

function showResultsCard() {
    document.getElementById("resultsCard").style.opacity = "1.0";
}

function hideAnswer1Card() {
    document.getElementById("answer1Card").style.opacity = "0.0";
}

function showAnswer1Card() {
    document.getElementById("answer1Card").style.opacity = "1.0";
}

function hideAnswer1Text() {
    document.getElementById("answer1").style.opacity = "0.0";
}

function showAnswer1Text() {
    document.getElementById("answer1").style.opacity = "1.0";
}

function hideAnswer2Card() {
    document.getElementById("answer2Card").style.opacity = "0.0";
}

function showAnswer2Card() {
    document.getElementById("answer2Card").style.opacity = "1.0";
}

function hideAnswer2Text() {
    document.getElementById("answer2").style.opacity = "0.0";
}

function showAnswer2Text() {
    document.getElementById("answer2").style.opacity = "1.0";
}

function hideAnswer3Card() {
    document.getElementById("answer3Card").style.opacity = "0.0";
}

function showAnswer3Card() {
    document.getElementById("answer3Card").style.opacity = "1.0";
}

function hideAnswer3Text() {
    document.getElementById("answer3").style.opacity = "0.0";
}

function showAnswer3Text() {
    document.getElementById("answer3").style.opacity = "1.0";
}


function generateQuestions() {
    let question1 = new Object();
    question1.questionNumber = "Question one:";
    question1.questionToAnswer = "Is fire hot?";
    question1.answer1 = "yes";
    question1.answer2 = "probably";
    question1.answer3 = "maybe";
    question1.answerChosen = "";
    question1.correctAnswer = "yes";
    question1.wrongOrRight = "";

    questions.push(question1);

    let question2 = new Object();
    question2.questionNumber = "Question two:";
    question2.questionToAnswer = "Is water wet?";
    question2.answer1 = "yes";
    question2.answer2 = "kind of";
    question2.answer3 = "not at all";
    question2.answerChosen = "";
    question2.correctAnswer = "yes";
    question2.wrongOrRight = "";

    questions.push(question2);

    let question3 = new Object();
    question3.questionNumber = "Question three:";
    question3.questionToAnswer = "What is dirt?";
    question3.answer1 = "dirt, duh";
    question3.answer2 = "stuff";
    question3.answer3 = "ungranted wishes";
    question3.answerChosen = "";
    question3.correctAnswer = "dirt, duh";
    question3.wrongOrRight = "";

    questions.push(question3);
}

function showCheck1() {
    document.getElementById("check1").style.opacity = "1.0";
}

function showCheck2() {
    document.getElementById("check2").style.opacity = "1.0";
}

function showCheck3() {
    document.getElementById("check3").style.opacity = "1.0";
}

function fadeInResults() {
    
    document.getElementById("resultsCard").style.opacity = "1.0";
    document.getElementById("questionNumber2").style.display = "block";
    document.getElementById("questionNumber2").style.opacity = "1.0";
    showResultQ1();
    setTimeout(showResultQ1Result, 700);
    setTimeout(showResultQ2, 2000);
    setTimeout(showResultQ2Result, 2700);
    setTimeout(showResultQ3, 4000);
    setTimeout(showResultQ3Result, 4700);
    setTimeout(showCheck1, 6000);
    setTimeout(showCheck2, 6200);
    setTimeout(showCheck3, 6400);
    setTimeout(showNumberCorrect, 7000);

}

function displayResults() {
    // hide question card
    hideQuestionCard();
    document.getElementById("questionCard").style.display = "none";

    // populate results card
    let currentQuestionNumber = 0;
    for (i = 0; i < questions.length; i++) {
        let currentQHTMLThing = (currentQuestionNumber + 1);
        let questionIDCurrent = ("question" + currentQHTMLThing);
        let resultIDCurrent = ("result" + currentQHTMLThing);

        document.getElementById(questionIDCurrent).innerText = (questions[currentQuestionNumber].questionToAnswer + " ");
        document.getElementById(resultIDCurrent).textContent = ('you chose "' + questions[currentQuestionNumber].answerChosen + '"');

        if (questions[currentQuestionNumber].wrongOrRight == "right") {
            document.getElementById(questionIDCurrent).innerHTML += '<span id=' + '"check' + currentQHTMLThing +  '" class="fas fa-check right"></span>';
        } else {
            document.getElementById(questionIDCurrent).innerHTML += '<span id=' + '"check' + currentQHTMLThing +  '" class="fas fa-times wrong"></span>';
        }

        currentQuestionNumber++;
    }
    document.getElementById("numberCorrect").innerHTML += ('<span>' + numberOfCorrectAnswers + " / " + questions.length + '</span>');
    //display results card
    showResultsCard();
    document.getElementById("resultsCard").style.display = "block";
    fadeInResults();
}

function displayNextQuestion() {
    if (questionsIndex < questions.length) {
        if (questionsIndex == (questions.length - 1)) {
            displayResults();

        } else {
            questionsIndex++;
            displayCurrentQuestion();

            showAnswer1Card();
            setTimeout(showAnswer2Card, 200);
            setTimeout(showAnswer3Card, 400);
        }
    }
}

function PreviousQuestion() {
    if (questionsIndex >= 2) {
        questionsIndex--;
    } else {
        // do nothing ;
    }
}

function displayCurrentQuestion() {
    document.getElementById("questionNumber").innerText = questions[questionsIndex].questionNumber;
    document.getElementById("question").innerText = questions[questionsIndex].questionToAnswer;
    document.getElementById("answer1").textContent = questions[questionsIndex].answer1;
    document.getElementById("answer2").textContent = questions[questionsIndex].answer2;
    document.getElementById("answer3").textContent = questions[questionsIndex].answer3;
    
    showQuestion();
    showAnswer1Card();
    setTimeout(showAnswer2Card, 200);
    setTimeout(showAnswer3Card, 400);
}

function checkAnswer(guess, guessID) {
    let delayTime = 1000;

    questions[questionsIndex].answerChosen = guess;
    lastAnswerChose = guessID;

    function rightAnswer() {
        questions[questionsIndex].wrongOrRight = "right";
    }

    function wrongAnswer() {
        questions[questionsIndex].wrongOrRight = "wrong";
    }

    function chooseRightOrWrongAnswer() {
        if (guess == questions[questionsIndex].correctAnswer) {
            console.log("correct!");
            numberOfCorrectAnswers++;
            rightAnswer();
        } else {
            console.log("wrong!");
            wrongAnswer();
        }
    }

    function checkAnswerThenDisplayNext() {
        if (questionsIndex == (questions.length - 1)) {
            chooseRightOrWrongAnswer();
            displayResults();
        } else {
            chooseRightOrWrongAnswer();
            displayNextQuestion();
        }
    }

    setTimeout(checkAnswerThenDisplayNext, 1000);

    switch(guessID){
        case "answer1":
            //
            setTimeout(hideAnswer1Card, 700);
            hideAnswer2Card();
            hideAnswer3Card();
            break;
        case "answer2":
            //
            hideAnswer1Card();
            setTimeout(hideAnswer2Card, 700);
            hideAnswer3Card();
            break;
        case "answer3":
            //
            hideAnswer1Card();
            hideAnswer2Card();
            setTimeout(hideAnswer3Card, 700);
            break;
        default:
            console.log("something went wrong");
    }

}