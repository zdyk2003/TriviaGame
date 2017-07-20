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

//create the timer
var timer = 20
var intervalId;
var unanswered = 0;

function time() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	timer--;

	$(".timer").html("<p>" + "Time Remaining:  " + timer + "</p>");

	if(timer === 0) {
		
		stop();
				unanswered++; 
				questionCounter++;
				console.log(questionCounter); 
				$(".box").html("<h3>TIME'S UP!</h3><p>The correct answer is Astoria, OR.</p>")
				$('<img id = "gif" src="assets/images/' + questions.question1.correctImage + '">').appendTo(".box");
				console.log("no answer");
	}
}

function stop() {
	clearInterval(intervalId);	
}

time();


var correct = 0;
var inCorrect = 0;
var unanswered = 0;
var questionCounter = 0;

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


	// $("#question").html("<h2>" + 'questions' +['question1']+['question'] + "</h2>");

	$(".question1").text(questions.question1.question);

	for (var i = 0; i < questions.question1.answer.length; i++) {
		$(".box").append("<h3 class = 'answers'>" + questions.question1.answer[i] + "</h3>");
		console.log(questions.question1.answer[i]);
	}

	$(".answers").on("click", function(e){
		var userClick = e.currentTarget.innerText;

			if(userClick === questions.question1.correctAnswer) {
				stop();
				correct++;
				console.log(correct);
				questionCounter++;
				console.log(questionCounter);
				$(".box").html("<h3>CORRECT!!</h3> <p>Goonies took place in Astoria, OR.</p>");
				$('<img id = "gif" src="assets/images/' + questions.question1.correctImage + '">').appendTo(".box");
				// setTimeout function(); 
			}
			else if (userClick !== questions.question1.correctAnswer) {
				stop();
				inCorrect++;
				console.log(inCorrect);
				questionCounter++;
				console.log(questionCounter);
				$(".box").html("<h3>WRONG!</h3><p>The correct answer is Astoria, OR.</p>")
				$('<img id = "gif" src="assets/images/' + questions.question1.correctImage + '">').appendTo(".box");
				console.log("wrong")
			}

	});

// 	$("#question").text(questions.question2.question);

// 	for (var i = 0; i < questions.question2.answer.length; i++) {
// 		$(".box").append("<h3 class = 'answers'>" + questions.question2.answer[i] + "</h3>");

// 	}

// 	$(".answers").on("click", function(e){
// 		var userClick = e.currentTarget.innerText;

// 			if(userClick === questions.question2.correctAnswer) {
// 				stop();
// 				correct++;
// 				console.log(correct);
// 				$(".box").html("<h3>CORRECT!!</h3> <p>Chunk had to do the Truffle Shuffle.</p>");
// 				$('<img id = "gif" src="assets/images/truffleShuffle.gif">').appendTo(".box");
// 				console.log("yay for you")

// 			}
// 			else if (userClick !== questions.question2.correctAnswer) {
// 				stop();
// 				inCorrect++;
// 				console.log(inCorrect);
// 				$(".box").html("<h3>WRONG!</h3><p>The correct answer is the Truffle Shuffle.</p>")
// 				$('<img id = "gif" src="assets/images/truffleShuffle.gif">').appendTo(".box");
// 				console.log("wrong")
// 			}
// 	});



// 	$("#question").text(questions.question3.question);

// 	for (var i = 0; i < questions.question3.answer.length; i++) {
// 		$(".box").append("<h3 class = 'answers'>" + question3.answer[i] + "</h3>");
// 	}

// 	$(".answers").on("click", function(e){
// 		var userClick = e.currentTarget.innerText;

// 			if(userClick === questions.question3.correctAnswer) {
// 				stop();
// 				correct++;
// 				console.log(correct);
// 				$(".box").html("<h3>CORRECT!!</h3> <p>The Goonies are searching for One-Eyed Willy's treasure.</p>");
// 				$('<img id = "gif" src="assets/images/oneEyedWilly.gif">').appendTo(".box");
// 				console.log("yay for you")

// 			}
// 			else if (userClick !== questions.question3.correctAnswer) {
// 				stop();
// 				inCorrect++;
// 				console.log(inCorrect);
// 				$(".box").html("<h3>WRONG!</h3><p>The correct answer is One-Eyed Willy.</p>")
// 				$('<img id = "gif" src="assets/images/oneEyedWilly.gif">').appendTo(".box");
// 				console.log("wrong")
// 			}
// 	});


// function endGame() {
// 	if (counter === 3){
// 		$("correct").html("<h3>" + "You got" + correct + "questons right!" + "</h3>");
// 		$("inCorrect").html("<h3>" + "You got" + inCorrect + "questons wrong!" + "</h3>");
// 		$("unanswered").html("<h3>" + "You did not answer" + unanswered + "questons." + "</h3>");
// 		$('<img id = "gif" src="assets/images/mikeyWell.gif">').appendTo(".box");
// 	}
// }







