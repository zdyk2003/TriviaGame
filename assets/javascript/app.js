// alert("Goonies Never Die");

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

