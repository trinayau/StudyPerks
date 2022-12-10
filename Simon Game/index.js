// store button colors
var buttonColors = ["blue", "red", "green", "yellow"];
// store game sequence
var gamePattern = [];
// store player input sequence
var userPattern = [];
// game start status
var start = false;
// start level 
var level = 0;

// detect keyboard press to start game 
// check if game has started or not 
$(".game-start").click(function() {
    // start game at level 0 - changing the header to reflect level 
    if (!start) {
        $(".game-start").text("Level " + level);

        // show first color of sequence 
        nextColor();

        // change status of game to started 
        start = true;
    }
});

// detect color user clicked
$(".btn").click(function() {
    var userClickedColor = $(this).attr("id");
    // add color to user sequence
    userPattern.push(userClickedColor);

    // call animte function
    animateButton(userClickedColor);
    // to check the users last input e.g sequence of 5 inputs, last input index = 4
    checkPatterns(userPattern.length - 1)
});

// function to display color sequence
function nextColor() {
// clear user sequence
userPattern = [];

// increase level
level++;
$(".game-start").text("Level " + level);

// create ranodm number between 0-3 to generate index for random color    
    var randomNumber = Math.floor (Math.random()*4);
    var randomColor = buttonColors[randomNumber];
    // add colour to game sequence
    gamePattern.push(randomColor);
    // make color flash to show user 
    $("#" + randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}



// function to animate user click 
function animateButton(userChosenColor) {
    $("#" + userChosenColor).addClass("onClick");
    setTimeout (function() {
        $("#" + userChosenColor).removeClass("onClick");
    }, 100);
}



// check user sequence against game sequence 
function checkPatterns(currentLevel) {
// check if the last clicked color matches the last color in game pattern
if (userPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Correct");
    // check if user input the current number of colors
    if (userPattern.length === gamePattern.length) {
        // show next color after a short delay of user clicking last color
        setTimeout (function () {
            nextColor();}, 1000)
    }
} else {
    console.log("Game Over");
    // change header and bg color to represent loss
    $("body").addClass("lose");
    setTimeout (function () {
        $("body").removeClass("lose");}, 200);

    $(".game-start").html("GAME OVER<br>Start again");

    // reset the level/game
    level = 0;
    start = false;
    gamePattern = [];
    }
}

