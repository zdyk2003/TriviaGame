// alert("Goonies Never Die");
// var startScreen;

$(document).ready(function() {

// 	function firstScreen() {
// 		startScreen = "<p>Click to Start</p><br><img class = 'image' src = 'images/neverSayDie.jpg>"
// 		$(".start").html(firstScreen);
// 	}
// firstScreen();
// });
var correct = 0;
var inCorrect = 0;
var unanswered = 0;

//create the timer

var timer = 20

var intervalId;

function time() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	timer--;

	$(".timer").html("<p>" + "Time Remaining:  " + timer + "</p>");

	if(timer === 0) {
		stop();
	}
}

function stop() {
	clearInterval(intervalId);
}

time();

//array holding the questions
//array holding the answers

var question1 = {
	question: "What city does the movie take place?",
	answer: ["Dallas, TX", "Astoria, OR", "Seattle, WA"],
	correctAnswer: "Astoria, OR",
}

$("#question").text(question1.question);

for (var i = 0; i < question1.answer.length; i++) {
	$(".box").append("<h3 class = 'answers'>" + question1.answer[i] + "</h3>");
}

$(".answers").on("click", function(e){
	var userClick = e.currentTarget.innerText;

	if (timer === 0) {
			stop();
			unanswered++;
			console.log(unanswered);
			$(".box").html("<h3>TIME'S UP!</h3><p>The correct answer is Astoria, OR.</p>")
			$('<img id = "gif" src="assets/images/astoria.gif">').appendTo(".box");
			console.log("no answer");
		}	

		else if(userClick === question1.correctAnswer) {
			stop();
			correct++;
			console.log(correct);
			$(".box").html("<h3>CORRECT!!</h3> <p>Goonies took place in Astoria, OR.</p>");
			$('<img id = "gif" src="assets/images/astoria.gif">').appendTo(".box");
			console.log("yay for you")

		}
		else if (userClick !== question1.correctAnswer) {
			stop();
			inCorrect++;
			console.log(inCorrect);
			$(".box").html("<h3>WRONG!</h3><p>The correct answer is Astoria, OR.</p>")
			$('<img id = "gif" src="assets/images/astoria.gif">').appendTo(".box");
			console.log("wrong")
		}
//close question1		
});

var question2 = {
	question: "What dance does Chunk have to do so he can come in the gate?",
	answer: ["Truffle Shuffle", "Hokey Pokey", "Macarena"],
	correctAnswer: "Truffle Shuffle",
}

$("#question").text(question2.question);

for (var i = 0; i < question2.answer.length; i++) {
	$(".box").append("<h3 class = 'answers'>" + question2.answer[i] + "</h3>");
}

$(".answers").on("click", function(e){
	var userClick = e.currentTarget.innerText;

	if (timer === 0) {
			stop();
			unanswered++;
			console.log(unanswered);
			$(".box").html("<h3>TIME'S UP!</h3><p>The correct answer is the Truffle Shuffle.</p>")
			$('<img id = "gif" src="assets/images/truffleShuffle.gif">').appendTo(".box");
			console.log("no answer");
		}	

		else if(userClick === question2.correctAnswer) {
			stop();
			correct++;
			console.log(correct);
			$(".box").html("<h3>CORRECT!!</h3> <p>Chunk had to do the Truffle Shuffle.</p>");
			$('<img id = "gif" src="assets/images/truffleShuffle.gif">').appendTo(".box");
			console.log("yay for you")

		}
		else if (userClick !== question2.correctAnswer) {
			stop();
			inCorrect++;
			console.log(inCorrect);
			$(".box").html("<h3>WRONG!</h3><p>The correct answer is the Truffle Shuffle.</p>")
			$('<img id = "gif" src="assets/images/truffleShuffle.gif">').appendTo(".box");
			console.log("wrong")
		}
//close question2		
});

var question3 = {
	question: "The Goonies are searching for the lost treasure of which pirate?",
	answer: ["Peg Leg Jake", "Captain Jack Sparrow", "One-Eyed Willy"],
	correctAnswer: "One-Eyed Willy",
}

$("#question").text(question3.question);

for (var i = 0; i < question3.answer.length; i++) {
	$(".box").append("<h3 class = 'answers'>" + question3.answer[i] + "</h3>");
}

$(".answers").on("click", function(e){
	var userClick = e.currentTarget.innerText;

	if (timer === 0) {
			stop();
			unanswered++;
			console.log(unanswered);
			$(".box").html("<h3>TIME'S UP!</h3><p>The correct answer is One-Eyed Willy.</p>")
			$('<img id = "gif" src="assets/images/oneEyedWilly.gif">').appendTo(".box");
			console.log("no answer");
		}	

		else if(userClick === question3.correctAnswer) {
			stop();
			correct++;
			console.log(correct);
			$(".box").html("<h3>CORRECT!!</h3> <p>The Goonies are searching for One-Eyed Willy's treasure.</p>");
			$('<img id = "gif" src="assets/images/oneEyedWilly.gif">').appendTo(".box");
			console.log("yay for you")

		}
		else if (userClick !== question3.correctAnswer) {
			stop();
			inCorrect++;
			console.log(inCorrect);
			$(".box").html("<h3>WRONG!</h3><p>The correct answer is One-Eyed Willy.</p>")
			$('<img id = "gif" src="assets/images/oneEyedWilly.gif">').appendTo(".box");
			console.log("wrong")
		}
//close question3		
});


//close document.ready
});







