// User presses start to play the game
// When user selects an answer, they can either get it right or wrong or the time runs out
// create 4 variables
var card = $("#quiz-area");
var countStartNumber = 30;
var question = [{
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