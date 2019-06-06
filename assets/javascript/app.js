$(document).ready(function(){

// variables

var time = 45;
var count = 0;
var time;
var selection = false;
var right = 0;
var wrong = 0;


var question = ["The average person does what 13 times a day?", "The Average American does what 22 times a day?", "In California you can't legally buy a mousetrap without having a what?", "Coprastastaphobia is the fear of what?", "The first puck used In the game of ice hockey game, what was the first puck used made out of?"];
 var answer =  ["Laughs", "Opens fridge", "Hunting License", "Constipation", "Frozen Cow Manure"];  
// question: a string,
    // answers: within an array holding 4 strings
    // correct answer: a string- whatever is correct from above
    //
},
{
// from here you just copy and paste what you did for the first question, separated by a comma
}]

// a variable to hold the set interval
var timer;

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

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