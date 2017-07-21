//timeout screen not working
//use the start screen model with the pause before changing screens
//question won't show up
$(document).ready(function() {

		$(".startImage").on("click", function(e) {
			audio1.play(); 
			setTimeout(function() {
			$("#startScreen").hide(); 
		}, 4000);
//close startScreen
		});
//close document.ready
});

var startScreen;
var audio1 = new Audio("assets/images/Hey you guuuuuuys.mp3");
var audio2 = new Audio("assets/images/Lets get outta here.mp3");
var audio3 = new Audio("assets/images/Laugh.mp3");
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
		console.log(unanswered);
		$(".box").html("<h3>TIME'S UP!</h3><p>The correct answer is " + questions['question' + questionCounter].correctAnswer + "</p>");
		$('<img id = "gif" src="assets/images/' + questions['question' + questionCounter].correctImage + '">').appendTo(".box");
		console.log("no answer");

			if(unanswered === 3) { //no answer clicks

				setTimeout(function() {
					stop();
					$(".box").html("");
					endGame2();
					}, 2500);
			}
			else{
				setTimeout(function() {
					$(".box").html("");
					$("#gif").attr("src", "");
					questionCounter++;
					console.log(questionCounter); 
					time();
					timer = 20;		
					$("#question").text(questions['question' + questionCounter].question);
						for (var i = 0; i < questions['question' + questionCounter].answer.length; i++) {
							$(".box").append("<h3 class = 'answers'>" + questions['question' + questionCounter].answer[i] + "</h3>");
							console.log(questions['question' + questionCounter].answer[i]);
						}
					}, 3000);
			}
		
	} //close if (timer === 0)
	
}  //close function decrement

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
				$(".answer").empty()	
				questionCounter++;
				console.log(questionCounter);
				
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

	if(questionCounter === 4){
			
			setTimeout(function() {
				stop();
				endGame1();
			}, 2500);

	}
	// else if (unanswered === 3) {

	// 	setTimeout(function() {
	// 		stop();
	// 		endGame2();
	// 		}, 2500);
	// }
	else {

		time();
		setTimeout(function() {
		$(".box").html("");
		$("#gif").attr("src", "");
			
		$("#question").text(questions['question' + questionCounter].question);
			for (var i = 0; i < questions['question' + questionCounter].answer.length; i++) {
				$(".box").append("<h3 class = 'answers'>" + questions['question' + questionCounter].answer[i] + "</h3>");
				console.log(questions['question' + questionCounter].answer[i]);
			}
		}, 3000);

		timer = 20;
		
	}
	
}

function endGame1() {
		// console.log("it's over");
		$("#startScreen").html("");
		$(".instructions").html("");
		$(".timer").empty();
		$("#question").text("");
		$(".box").html("");
		$("#gif").attr("src", "");
		audio3.play();
		$("#question").html("<h3>" + "You answered " + correct + " right" + "</h3>"  +
		"<h3>" + "You answered " + inCorrect + " wrong" + "</h3>" + 
		"<h3>" + "You had " + unanswered + " unanswered" + "</h3>");
		$('<img id = "gif" src="assets/images/mikeyWell.gif">').appendTo(".box");
		setTimeout(function() {
			location.reload();
		}, 5000);
}

function endGame2() {
		console.log("it's over");
		$("#startScreen").html("");
		$(".instructions").html("");
		$(".timer").empty();
		$("#question").text("");
		$(".box").html("");
		$("#gif").attr("src", "");
		audio2.play();
		$("#question").html("<h3>" +  "You got didn't answer any questions!" + "<br>" + "You can't be a Goonie." + "</h3>");
		$('<img id = "gif" src="assets/images/mikeyWell.gif">').appendTo(".box");
		setTimeout(function() {
			location.reload();
		}, 5000);	

}








