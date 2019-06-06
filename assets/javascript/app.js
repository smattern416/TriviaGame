$(document).ready(function(){

// variables

var time = 45;
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

//  functions
function showHolders() {
    $("#question-holder").show();
    $("#choice-holder-1").show();
    $("#choice-holder-2").show();
    $("#choice-holder-3").show();
    $("#choice-holder-4").show();
}

function hideHolders() {
    $("#question-holder").hide();
    $("#choice-holder-1").hide();
    $("#choice-holder-2").hide();
    $("#choice-holder-3").hide();
    $("#choice-holder-4").hide();
}
function hideResults() {
    $("#correct-holder").hide();
    $("#incorrect-holder").hide();
    $("#unanswered-holder").hide();
    $("#restart-holder").hide();
}
function displayQuestion () {
    hideResults();
    $("#answer-holder").hide();
    $("#image-holder").hide();
    $("#time-holder").show();
    showHolders();
    $("#question-holder").html(question[count]);
    $("#choice-holder-1").html(optionOne[count]);
    $("#choice-holder-2").html(optionTwo[count]);
    $("#choice-holder-3").html(optionThree[count]);
    $("#choice-holder-4").html(optionFour[count]);
}
$("#choice-holder-1").on("click", checkAnswer) 
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)



    countdown: function(){
        // decrement counter, use jquery to put dynamically put logic onto the page, if statement - if time is up, run time up function
    },
    loadQuestion: function() {
        // set timer, timer = setInterval(game.countdown.1000), dynamically add question into vard variable- card.html ("<h2> + </h2>"), for loop run through the questions, a dynamically addded buttons with answer options

    }

}


// create click events

$(document).on("click", "#start", functiom () {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'")
})