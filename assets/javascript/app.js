//timeout screen not working
//use the start screen model with the pause before changing screens
//question won't show up
$(document).ready(function() {

		$(".startImage").on("click", function(e) {
			audio.play(); 
			setTimeout(function() {
			$("#startScreen").hide(); 
		}, 4000);
//close startScreen
		});
//close document.ready
});

var startScreen;
var audio = new Audio("assets/images/Hey you guuuuuuys.mp3");

//variables
var timer = 20
var intervalId;
var correct = 0;
var inCorrect = 0;
var unanswered = 0;
var questionCounter = 1;

//questions
var questions = {
	question1: {
		question: "What city does the movie take place?",
		answer: ["Dallas, TX", "Astoria, OR", "Seattle, WA"],
		correctAnswer: "Astoria, OR",
		correctImage: "astoria.gif"
	},
	question2: {
		question: "What dance does Chunk have to do so he can come in the gate?",
		answer: ["Truffle Shuffle", "Hokey Pokey", "Macarena"],
		correctAnswer: "Truffle Shuffle",
		correctImage: "truffleShuffle.gif"
	},
	question3: {
		question: "The Goonies are searching for the lost treasure of which pirate?",
		answer: ["Peg Leg Jake", "Captain Jack Sparrow", "One-Eyed Willy"],
		correctAnswer: "One-Eyed Willy",
		correctImage: "oneEyedWilly.gif"
	}
}
	

//timer
function time() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	timer--;

	$(".timer").html("<p>" + "Time Remaining:  " + timer + "</p>");

	if(timer === 0) {
		
		stop();
				unanswered++; 
				$(".box").html("<h3>TIME'S UP!</h3><p>The correct answer is " + questions['question' + questionCounter].correctAnswer + "</p>");
				$('<img id = "gif" src="assets/images/' + questions['question' + questionCounter].correctImage + '">').appendTo(".box");
				console.log("no answer");
				questionCounter++;
				console.log(questionCounter); 
	}
}

function stop() {
	clearInterval(intervalId);	
}

time();


	$("#question").text(questions['question' + questionCounter].question);

	for (var i = 0; i < questions['question' + questionCounter].answer.length; i++) {
		$(".box").append("<h3 class = 'answers'>" + questions['question' + questionCounter].answer[i] + "</h3>");
		console.log(questions['question' + questionCounter].answer[i]);
	}

	$("body").on("click", ".answers", function answerClick(e){
		var userClick = e.currentTarget.innerText;

			if(userClick === questions['question' + questionCounter].correctAnswer) {
				stop();
				correct++;
				console.log(correct);
				$(".box").html("<h3>CORRECT!!</h3>");
				$('<img id = "gif" src="assets/images/' + questions['question' + questionCounter].correctImage + '">').appendTo(".box");
				questionCounter++;
				console.log(questionCounter);
				// setTimeout function(); 
			}	
			else if (userClick !== questions['question' + questionCounter].correctAnswer) {
				stop();
				inCorrect++;
				console.log(inCorrect);
				$(".box").html("<h3>WRONG!</h3><p>The correct answer is  " + questions['question' + questionCounter].correctAnswer + ".</p>")
				$('<img id = "gif" src="assets/images/' + questions['question' + questionCounter].correctImage + '">').appendTo(".box");
				questionCounter++;
				console.log(questionCounter);
			}
			checkIfDone();
			
			
	});

function checkIfDone (){
	var counter = 1;
	if(counter === 4){
		//there are 3 questions
		endGame();
	}

	else {
		//this clears the box and then the next group of answers won't show up
		// setTimeout(function() {
		// 	$(".box").empty();
		// 	}, 3000);		
		time();
		timer = 20;		
		$("#question").text(questions['question' + questionCounter].question);
			for (var i = 0; i < questions['question' + questionCounter].answer.length; i++) {
				$(".box").append("<h3 class = 'answers'>" + questions['question' + questionCounter].answer[i] + "</h3>");
				console.log(questions['question' + questionCounter].answer[i]);
			}

	}
}

function endGame() {
		$(".timer").empty();
		$("correct").html("<h3>" + "You got" + correct + "questons right!" + "</h3>");
		$("inCorrect").html("<h3>" + "You got" + inCorrect + "questons wrong!" + "</h3>");
		$("unanswered").html("<h3>" + "You did not answer" + unanswered + "questons." + "</h3>");
		$('<img id = "gif" src="assets/images/mikeyWell.gif">').appendTo(".box");
		
}







