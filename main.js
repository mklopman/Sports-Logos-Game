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

    // create
    // modify
    // append


    var logos = [{
        name: "Washington Capitals",
        wrong1: "Colorado Avalanche",
        wrong2: "Vancouver Canucks",
        wrong3: "Pittsburgh Penguins",
        img: "./logos/caps.jpg"
    }, {
        name: "Portland Trail Blazers",
        wrong1: "Washington Wizards",
        wrong2: "OkC Thunder",
        wrong3: "Sacramento Kings",
        img: "./logos/blazers.jpg"
    }, {
        name: "Toronto Blue Jays",
        wrong1: "Baltimore Orioles",
        wrong2: "St. Louis Cardinals",
        wrong3: "Miami Marlins",
        img: "./logos/bluejays.jpg"
    }, {
        name: "Houston Texans",
        wrong1: "Dallas Cowboys",
        wrong2: "Indianapolis Colts",
        wrong3: "Buffalo Bills",
        img: "./logos/texans.jpg"
    }, {
        name: "Milwaukee Brewers",
        wrong1: "Chicago Cubs",
        wrong2: "San Diego Padres",
        wrong3: "Cincinnati Reds",
        img: "./logos/brewers.jpg"
    }, {
        name: "Chicago Bulls",
        wrong1: "Los Angeles Lakers",
        wrong2: "Milwaukee Bucks",
        wrong3: "Detroit Pistons",
        img: "./logos/bulls.jpg"
    }, {
        name: "Anaheim Ducks",
        wrong1: "The Mighty Ducks",
        wrong2: "Nashville Predators",
        wrong3: "Calgary Flames",
        img: "./logos/ducks.jpg"
    }, {
        name: "Jacksonville Jaguars",
        wrong1: "Kansas City Chiefs",
        wrong2: "Denver Broncos",
        wrong3: "Chicago Bears",
        img: "./logos/jags.jpg"
    }, {
        name: "Miami Heat",
        wrong1: "Orlando Magic",
        wrong2: "Los Angeles Clippers",
        wrong3: "Cleveland Cavaliers",
        img: "./logos/heat.jpg"
    }, {
        name: "Minnesota Twins",
        wrong1: "Detroit Tigers",
        wrong2: "Kansas City Royals",
        wrong3: "Houston Astros",
        img: "./logos/twins.jpg"
    }, {
        name: "Golden State Warriors",
        wrong1: "Philadelphia 76ers",
        wrong2: "Seattle Supersonics",
        wrong3: "Houston Rockets",
        img: "./logos/warriors.jpg"
    }, {
        name: "Tennessee Titans",
        wrong1: "Houston Oilers",
        wrong2: "Los Angeles Rams",
        wrong3: "Miami Dolphins",
        img: "./logos/titans.jpg"
    }, {
        name: "Buffalo Sabres",
        wrong1: "San Jose Sharks",
        wrong2: "Arizona Coyotes",
        wrong3: "Minnesota Wild",
        img: "./logos/sabres.jpg"
    }, {
        name: "Philadelphia Phillies",
        wrong1: "Washington Nationals",
        wrong2: "Colorado Rockies",
        wrong3: "Pittsburgh Pirates",
        img: "./logos/phillies.jpg"
    }, {
        name: "Indiana Pacers",
        wrong1: "Boston Celtics",
        wrong2: "Atlanta Hawks",
        wrong3: "Dallas Mavericks",
        img: "./logos/pacers.jpg"
    }, {
        name: "Tampa Bay Lightning",
        wrong1: "Los Angeles Chargers",
        wrong2: "St. Louis Blues",
        wrong3: "Ottawa Senators",
        img: "./logos/lightning.jpg"
    }, {
        name: "New England Patriots",
        wrong1: "Green Bay Packers",
        wrong2: "Minnesota Vikings",
        wrong3: "San Francisco 49ers",
        img: "./logos/patriots.jpg"
    }, {
        name: "New York Mets",
        wrong1: "New York Yankees",
        wrong2: "Texas Rangers",
        wrong3: "Oakland Athletics",
        img: "./logos/mets.jpg"
    }, {
        name: "New Orleans Saints",
        wrong1: "Seattle Seahawks",
        wrong2: "New York Jets",
        wrong3: "Cleveland Browns",
        img: "./logos/saints.jpg"
    }, {
        name: "Detroit Red Wings",
        wrong1: "Winnipeg Jets",
        wrong2: "New Jersey Devils",
        wrong3: "Dallas Stars",
        img: "./logos/redwings.jpg"
    }]

    var body = $('body');  // setting up the main elements

    var playButton = $('<button>');

    var frontButton = $('#play');

    var timer; // had to declare this globally to get the timer to work properly

    var container = $('<div>');         // this container will hold the logo and the 4 multiple choice answers
    container.attr("id", "container");

    var score = $('<p>'); 				// this will help track the amount of logos the user gets through
    score.attr("id", "score")

    var countdown = $('<div>');  		// need this to use in the timer function
    countdown.attr("id", "counter");

    var scoreCard = $('<div>');			// this will be helpful when I display the score 
    scoreCard.attr("id", "score-card")

    var rightAnswers = [] // Empty array to store each correct answer in. This is key for the check for win function

    var currentQ = 0 // sets to 0 so we can go through the entire logos array in the main function

    var right = $('<button>');

    body.append(scoreCard)

    var instructions = $('.instructions');

    var resetButton = $('<button>')
        resetButton.attr("id", "reset-btn");
        resetButton.text("HOME");
        body.append(resetButton);


    ////* got the shuffle Array function from stack overflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var shuffleLogos = function(logos) {
        for (var i = logos.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));  // Randomized the logos so the order changes every time. 
            var temp = logos[i];
            logos[i] = logos[j];
            logos[j] = temp;
        }
        return logos;
    }

    var randomizedLogos = shuffleLogos(logos); // I stored the randomized logos into a global variable so I can use it in the main function. 

    var currentTeam = {}; // creating an empty object globally so we can use it in the function that sets up the logo and 4 answers

    var displayNextQuestion = function() {  		// This function IS THE GAME pretty muc
        currentTeam = randomizedLogos[currentQ];	// 

        var currentLogo = $('<img>').attr("src", currentTeam.img).addClass("logo"); // Sets up the logo


        var possibleAnswers = [
            $('<button>').text(currentTeam.name).addClass("option correctAnswer").on("click", correctGuess),
            $('<button>').text(currentTeam.wrong1).addClass("option wrong1").on("click", function() { alert("Try Again!") }),
            $('<button>').text(currentTeam.wrong2).addClass("option wrong2").on("click", function() { alert("Try Again!") }),
            $('<button>').text(currentTeam.wrong3).addClass("option wrong3").on("click", function() { alert("Try Again!") })
        ];

        var shuffleAnswers = function(possibleAnswers) {
            for (var i = possibleAnswers.length - 1; i > 0; i--) {     //** I wanted to randomize the answers to the correct one doesn't
                var j = Math.floor(Math.random() * (i + 1));			// always show up in the same spot */
                var temp = possibleAnswers[i];
                possibleAnswers[i] = possibleAnswers[j];
                possibleAnswers[j] = temp;
            }
            return possibleAnswers;
        }

        var shuffledAnswers = shuffleAnswers(possibleAnswers); // I stored those random answers in a variable, just like the logos earlier. 

        var createQuestionDiv = function() {  						// creating a div to append the answers to made flexbox easier to use
            var questionDiv = $("<div>").addClass("question-div");  // Giving the div a class so I can style it in CSS
            container.append(currentLogo);							//** adding the logo and all the answers to the div, and adding that
            container.append(questionDiv);							// to the container, which has already been added to the body */
            questionDiv.append(shuffledAnswers[0]);
            questionDiv.append(shuffledAnswers[1]);
            questionDiv.append(shuffledAnswers[2]);
            questionDiv.append(shuffledAnswers[3]);
        }

        createQuestionDiv();
    }



    var modalButton = $(".instructions");
    var modalDiv = $(".modal");

    // Created the modal animation via the DOM. 

    modalButton.on("click", function() {
        var modalBox = $('<div>');
        modalBox.animate({
            width: "700px",
            height: "135px",
        }, "slow")
        modalBox.addClass("modal-box");
        console.log(modalButton);
        modalBox.text("You think you know your sports teams? Well, if you want to test your knowledge, try to Name. That. Logo. It's simple: Once you click 'BEGIN', you will have 45 seconds to guess as many team logos as you can from all four North American pro sports leagues. If you get to 20, YOU WIN! Try it out by clicking through below.");
        var closeButton = $("<button>");
        closeButton.addClass("close")
        closeButton.text("CLOSE");
        closeButton.on("click", function() {
            modalBox.hide();
        });
        modalBox.append(closeButton);
        modalDiv.append(modalBox);
    })



    function trackScore() {
        score.text(currentQ);
        scoreCard.append(score);
        // container.append(scoreCard);
    }


    // if the empty array eventually has 20 correct answes in it, the user wins

    function checkWin() {
        if (rightAnswers.length === 20) {
            alert("YOU WON!");
            clearInterval(timer);
        }
    }

    // clicking the "begin" button starts the game for the user

    playButton.click(function() {
        play();
        game();
    })


    // Calling the function that displays everything here, so we can call it on the play button. 

    function game() {
        displayNextQuestion();
    }


//* Play the game by clicking the 'BEGIN' button. This also starts the timer. 

    function play() {
        playButton.remove();
        var sec = 45;
        timer = setInterval(function() {
            $(countdown).text(sec--);
            if (sec === -2) {
                $(countdown).fadeOut('fast');
                alert('BOOOOOO!!!!!!')
            }
        }, 1000);
        body.append(countdown);
        countdown.show();
    }


    //* This will create te entire game's layout, by hiding everything on the landing page
    // and displaying the reset button, changing the background, plus the play button, score card
    // and the container that holds everything. 

    function createGame() {
        body.css("background-image", "url(https://www.nationalacademyofathletics.com/bbbg.jpg");
        $('#gameTitle').hide();
        frontButton.hide();
        modalDiv.hide();
        playButton.attr("id", "begin");
        playButton.text("BEGIN!");
        container.show();
        scoreCard.show();
        resetButton.show();
        body.append(playButton);
        body.append(container);    
    }

    resetButton.on("click", function(){
			body.css("background-image", "url(http://awswallpapershd.com/wp-content/uploads/2016/06/Baseball-Field-Wallpaper-For-Iphone.jpg");
        	container.hide();
        	scoreCard.hide();
        	playButton.hide();
        	frontButton.show();
        	$('#gameTitle').show();
        	$('.modal').show();
        	resetButton.hide();
        })



//* This function is how the user goes from logo to the next -- only by clicking the correct
// answer. Once the user gets it right, that answer gets pushed into the empty array that will store
// each correct answer. It's also tracking the score and checking for win for each logo. If the user
// hasn't won, the next logo will be displayed. 

    function correctGuess() {
        rightAnswers.push(currentTeam);
        currentQ += 1
        trackScore();
        $(".question-div").hide();
        checkWin();
        displayNextQuestion();
    }

// Clicking the button on the landing page that says "Wanna play?" will create the game page. 

    frontButton.click(function() {
        createGame();

    })



});
