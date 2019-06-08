$(document).ready(function(){
    // variables

    var count = 0;
    var time = 31;
    var selection = false;
    var clock;
    var right = 0;
    var wrong = 0;
    var noAnswer = 0;

var question = ["The average person does what 13 times a day?", "The Average American does what 22 times a day?", "In California you can't legally buy a mousetrap without having a what?", "Coprastastaphobia is the fear of what?", "The first puck used In the game of ice hockey game, what was the first puck used made out of?"];
 
// // right answers:
var answer =  ["Laughs", "Opens fridge", "Hunting License", "Constipation", "Frozen Cow Manure"];  

// // multiple choice options:
var optionOne =  ["Smiles", "Texts", "Hunting License", "Public Speaking", "Can of Beans"];  
var optionTwo =  ["Laughs", "Drinks Water", "Drivers License", "Outer Space", "Frozen Cow Manure"];  
var optionThree =  ["Cries", "Turns on faucet", "Pest Control License", "Constipation", "Set of Dentures"];  
var optionFour =  ["Yawns", "Opens fridge", "Fishing License", "Cars", "A Carved Piece of Wood"]; 

// Show & Hide Functions
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
        $("#right-holder").hide();
        $("#wrong-holder").hide();
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
    $("#choice1-holder").on("click", checkAnswer) 
    $("#choice2-holder").on("click", checkAnswer)
    $("#choice3-holder").on("click", checkAnswer)
    $("#choice4-holder").on("click", checkAnswer)

// Check the answer
    function checkAnswer() {

        hideHolders();

        if($(this).text() === answer[count]) {
            stopTime();
            selection = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The answer is: " + answer[count]);
            right++;
            count++;
        }
        else {
            stopTime();
            selection = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
            wrong++;
            count++;
        } 

        checkGameEnd();  
    }

// End of the Game 
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

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);
      
            if(time <= 0) {
                hideHolders();
                stopTime();
                $("#answer-holder").show();
                $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
                noAnswer++;
                count++;
                checkGameEnd();
            }
    }

    function startTime() {
        clearInterval(clock);
        clock = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(clock);
        resetTime();
        if(count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();

    // Show Results    
    function showResults() {
        $("#right-holder").show();
        $("#right-holder").html("Right: " + right);
        $("#wrong-holder").show();
        $("#wrong-holder").html("Wrong: " + wrong);
        $("#noAnswer-holder").show();
        $("#noAnswer-holder").html("noAnswer: " + noAnswer);
        $("#restart-holder").show();
        $("#restart-holder").html("Click Start to play again!");
    }

// Reset Results  
    function resetResults() {
        correct = 0;
        wrong = 0;
        noAnswer = 0;
    }

// Start  Function
    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }

// Start on click
  $(".start").on("click", function() {
    startGame();
  });
});
