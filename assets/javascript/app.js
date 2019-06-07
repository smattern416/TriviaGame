$(document).ready(function(){

// variables

var time = 30;
var count = 0;
var time;
var selection = false;
var right = 0;
var wrong = 0;

 // question: a string
var question = ["The average person does what 13 times a day?", "The Average American does what 22 times a day?", "In California you can't legally buy a mousetrap without having a what?", "Coprastastaphobia is the fear of what?", "The first puck used In the game of ice hockey game, what was the first puck used made out of?"];
 
// correct answers:
var answer =  ["Laughs", "Opens fridge", "Hunting License", "Constipation", "Frozen Cow Manure"];  

// multiple choice options:
var optionOne =  ["Smiles", "Texts", "Hunting License", "Public Speaking", "Can of Beans"];  
var optionTwo =  ["Laughs", "Drinks Water", "Drivers License", "Outer Space", "Frozen Cow Manure"];  
var optionThree =  ["Cries", "Turns on faucet", "Pest Control License", "Constipation", "Set of Dentures"];  
var optionFour =  ["Yawns", "Opens fridge", "Fishing License", "Cars", "A Carved Piece of Wood"];  

// create click events
//  functions
function showHolders() {
    $("#question-holder").show();
    $("#choice1-holder").show();
    $("#choice2-holder").show();
    $("#choice3-holder").show();
    $("#choice4-holder").show();
}

function hideHolders() {
    $("#question-holder").hide();
    $("#choice1-holder").hide();
    $("#choice2-holder").hide();
    $("#choice3-holder").hide();
    $("#choice4-holder").hide();
}
function hideResults() {
    $("#correct-holder").hide();
    $("#incorrect-holder").hide();
    $("#noAnswer-holder").hide();
    $("#restart-holder").hide();
}
function displayQuestion () {
    hideResults();
    $("#answer-holder").hide();
    $("#time-holder").show();
    showHolders();
    $("#question-holder").html(question[count]);
    $("#choice1-holder").html(optionOne[count]);
    $("#choice2-holder").html(optionTwo[count]);
    $("#choice3-holder").html(optionThree[count]);
    $("#choice4-holder").html(optionFour[count]);
}
$("#choice-holder-1").on("click", checkAnswer) 
    $("#choice2-holder").on("click", checkAnswer)
    $("#choice3-holder").on("click", checkAnswer)
    $("#choice4-holder").on("click", checkAnswer)

function checkAnswer() {
    hideHolders() {
        if($this).text() === answer[count] {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("That's right! The answer is: " + answer[count]);
            correct++;
            count++;

        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
            correct++;
            count++;
        }
        checkGameEnd();
    }

    function checkGameEnd() {
        if(count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();

            });
        }
    }
    function resetTime() {
        time = 31;
    }
    

    hideHolders();

    if
}
