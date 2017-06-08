$(document).ready(function() {

    //** LANDING PAGE: set up a function for the 
    // button that takes user to the game page */
    // 
    // GAME PAGE:
    // There needs to be an array of objects
    // Each object has a team name and a corresponding logo image
    // 
    //
    //** FIRST FUNCTION - Start button: the game page needs a button that will start the game
    // the start button will then turn into a timer, counting down from 1 minute */
    //
    // 
    // Once the button is clicked and the timer starts, a logo will show up at random
    //
    // Need a FUNCTION that displays a logo from the array at random, in the middle of the page
    //
    // 
    //** Need a FUNCTION for the input box -- it must include a keycode to submit the guess
    // AND it must know whether the guess is correct or not. If the guess is NOT correct, 
    // the input box will flash red. ELSE (if it IS correct), a the FUNCTION that displays a random
    // logo should be called */
    //
    // ** Need a FUNCTION that counts the amount of correct answers in one minute
    //
    // When time is up, answer tracker should animate to signal how many the user got correct
    //
    // Need a FUNCTION that resets the game
    //
    // things I need: 

    var logos = [
    {
        name: "Washington Capitals",
        img: "./logos/caps.jpg"
    }, {
        name: "Portland Trail Blazers",
        img: "./logos/blazers.jpg"
    }, {
        name: "Toronto Blue Jays",
        img: "./logos/bluejays.jpg"
    }, {
        name: "Houston Texans",
        img: "./logos/texans.jpg"
    }, {
        name: "Milwaukee Brewers",
        img: "./logos/brewers.jpg"
    }, {
        name: "Chicago Bulls",
        img: "./logos/bulls.jpg"
    }, {
        name: "Anaheim Ducks",
        img: "./logos/ducks.jpg"
    }, {
        name: "Jacksonville Jaguars",
        img: "./logos/jags.jpg"
    }, {
        name: "Miami Heat",
        img: "./logos/heat.jpg"
    }, {
        name: "Minnesota Twins",
        img: "./logos/twins.jpg"
    }, {
        name: "Golden State Warriors",
        img: "./logos/warriors.jpg"
    }, {
        name: "Tennessee Titans",
        img: "./logos/titans.jpg"
    }, {
        name: "Buffalo Sabres",
        img: "./logos/sabres.jpg"
    }, {
        name: "Philadelphia Phillies",
        img: "./logos/phillies.jpg"
    }, {
        name: "Indiana Pacers",
        img: "./logos/pacers.jpg"
    }, {
        name: "Tampa Bay Lightning",
        img: "./logos/lightning.jpg"
    }, {
        name: "New England Patriots",
        img: "./logos/patriots.jpg"
    }, {
        name: "New York Mets",
        img: "./logos/mets.jpg"
    }, {
        name: "New Orleans Saints",
        img: "./logos/saints.jpg"
    }, {
        name: "Detroit Red Wings",
        img: "./logos/redwings.jpg"
    }]

    // console.log(logos[19].name);

    var body = $('body');
    var frontButton = $('#play');
    var playButton = $('<button>');
    // var sec = 60;
    var countdown = $('<div>');
    countdown.attr("id", "counter");

    var selectedLogo = []
    var correctAnswers = {

    }

    var sec = 60;
		var timer = function() {
        setInterval(function() {
            $(countdown).text(sec--);
            if (sec == -1) {
                $(countdown).fadeOut('fast');
                clearInterval(timer);   
            }
            }, 1000);
        }


    frontButton.click(function() {
        body.css("background-color", "blue");
        frontButton.hide();
        playButton.attr("id", "begin");
        playButton.text("BEGIN!");
        body.append(playButton);
        var logoBox = $('<div>');
        logoBox.attr("id", "show_logo");
        body.append(logoBox);
        var scoreCard = $('<div>');
        scoreCard.attr("id", "score")
        body.append(scoreCard);
        var inputBox = $('<input>');
        inputBox.attr("id", "input");
        body.append(inputBox);
    })

    playButton.click(function() {
      playButton.remove();
      body.append(countdown);
      countdown.show();
      timer();	
  })








function shuffleArray(logos) {
    for (var i = logos.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = logos[i];
        logos[i] = logos[j];
        logos[j] = temp;
    }
    return logos[i].img;
}














});
