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

    var body = $('body'); // creating global variable for body
    var playButton = $('<button>');
	var frontButton = $('#play');

    var countdown = $('<div>');
    countdown.attr("id", "counter");

    var scoreCard = $('<div>');
    scoreCard.attr("id", "score")



    var selectedLogos = []
    var rightAnswers = []

   	var currentQ = 0

	var randomLogo = $('<img>'); // declaring a new img in memory
    var right = $('<button>');


//add attribution!!
    var shuffleLogos = function(logos) {
        for (var i = logos.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = logos[i];
            logos[i] = logos[j];
            logos[j] = temp;
        }
        return logos;
    }

    var newLogos = shuffleLogos(logos);

    // var getTeam = function(array){
	 

    var displayNextQuestion = function() {
    	var currentTeam = newLogos[currentQ];
    	console.log(currentTeam);

    	var currentLogo = $('<img>').attr("src", currentTeam.img);
    	var right = $('<button>').text(currentTeam.name).on("click", function() {
        	console.log("correct");
        });

	    var incorrectOne = $('<button>').text(currentTeam.wrong1);
	    var incorrectTwo = $('<button>').text(currentTeam.wrong2);
	    var incorrectThree = $('<button>').text(currentTeam.wrong3);

	    body.append(currentLogo)
	    body.append(right)
	    body.append(incorrectOne)
	    body.append(incorrectTwo)
	    body.append(incorrectThree)
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


    //this button starts the game
    playButton.click(function() {
        play();
        game();
    })

    function game() {
    	displayNextQuestion();
    }

    function play() {
        playButton.remove();
        body.append(countdown);
        countdown.show();
        timer();
    }

    function createGame() {
        body.css("background-color", "blue");
        frontButton.hide();
        playButton.attr("id", "begin");
        playButton.text("BEGIN!");
        body.append(playButton);
    }

    // this button creates the game page
    frontButton.click(function() {
        createGame();

    })














});
