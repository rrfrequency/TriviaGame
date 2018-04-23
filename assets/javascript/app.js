let correctAnswers = 0;
let incorrectAnswers = 0;
let unanswered = 0;
let userChoice = "";
let questionDisplay = 0;
let questionTimer = 25;
let completedQuestions = 0;
let responseImage = 0;
let showImage;

// Questions
let questionOne = {
	question: "Which family was warden of the North in the beginning of The Game of Thrones series?",
	responseOne: "House Stark",
	responseTwo: "House Karstark",
	responseThree: "House Mormont",
	responseFour: "House Reed",
	answer: "House Stark",
};

let questionTwo = {
	question: "What was name Bran gave his direwolf when he woke up from coma?",
	responseOne: "Shaggydog",
	responseTwo: "Ghost",
	responseThree: "Summer",
	responseFour: "Lady",
	answer: "Summer",
};

let questionThree = {
	question: "What house was the Sir Gregor also known as 'The Hound' from?",
	responseOne: "Tarly",
	responseTwo: "Clegane",
	responseThree: "Payne",
	responseFour: "Blackwater",
	answer: "Clegane",
};

let questionFour = {
	question: "Which of the following is not one of Daenerys Targaryen's dragons:",
	responseOne: "Drogon",
	responseTwo: "Dracarys",
	responseThree: "Viserion",
	responseFour: "Rhaegal",
	answer: "Dracarys",
};

let questionFive = {
	question: "What is the Lannister's house words?:",
	responseOne: "We Do No Sow",
	responseTwo: "A Lannister pays his debts",
	responseThree: "Unbent Unbowed Unbroken",
	responseFour: "Hear me Roar",
	answer: "Hear me Roar",
};

let questionSix = {
	question: "Who teaches Arya the ways of the Faceless men?",
	responseOne: "Waif",
	responseTwo: "Jaqen H'ghar",
	responseThree: "No One",
	responseFour: "Many Faced God",
	answer: "No One",
};

let questionSeven = {
	question: "When did Rhaegar Targaryen die?",
	responseOne: "Battle of the Trident",
	responseTwo: "Sack of King's Landing",
	responseThree: "Siege of Storm's End",
	responseFour: "Tower of Joy",
	answer: "Battle of the Trident",
};

let questionEight = {
	question: "Who of the followig was not invoved in the Conquest?",
	responseOne: "Visenya Targaryen",
	responseTwo: "Rhaenys Targaryen",
	responseThree: "Aegon Targaryen",
	responseFour: "Rhaenyra Targaryen",
	answer: "Rhaenyra Targaryen",
};

let questionNine = {
	question: "Who is the rightful heir to the thrones following the death of King Robert Baratheon?",
	responseOne: "John Snow",
	responseTwo: "Daenerys Targaryen",
	responseThree: "Stannis Baratheon",
	responseFour: "Renly Baratheon",
	answer: "Stannis Baratheon",
};

let questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine];



// on hover change background of possible answer
$(".answer").hover(function(){
$(this).css("background-color", "teal");
}, function(){
$(this).css("background-color", "white");
});

// reset function
function reset(){
	correctAnswers = 0;
	incorrectAnswers = 0;
	unanswered = 0;
	userChoice = "";
	questionDisplay = 0;
	questionTimer = 25;
	completedQuestions = 0;
}

// correct answer function
function correctResponse(){
	$("#image-holder").show();
	$(".timeTitle").hide();
	$(".triviaQuestion").hide();
	$("#textAreaOne").show();
	$("#textAreaTwo").show();
	$("#textAreaOne").html("Correct!");
	$("#textAreaTwo").html("Your answer: " + questionArray[questionDisplay].answer + " was right!");
	$("#answerOne").hide();
	$("#answerTwo").hide();
	$("#answerThree").hide();
	$("#answerFour").hide();
	responseImage = 0;
	displayImage();
	correctAnswers++;
	questionDisplay++;
	completedQuestions++;
	questionTimer = 18;
	setTimeout(nextQuestion,3000);
}

// incorrect answer function
function incorrectResponse(){
	$("#image-holder").show();
	$(".timeTitle").hide();
	$(".triviaQuestion").hide();
	$("#textAreaOne").show();
	$("#textAreaTwo").show();
	$("#textAreaOne").html("Wrong!");
	$("#textAreaTwo").html("The correct answer is "+questionArray[questionDisplay].answer);
	$("#answerOne").hide();
	$("#answerTwo").hide();
	$("#answerThree").hide();
	$("#answerFour").hide();
	responseImage = 1;
	displayImage();
	incorrectAnswers++;
	questionDisplay++;
	completedQuestions++;
	questionTimer = 18;
	setTimeout(nextQuestion,3000);

}

// no answer given function
function noResponse(){
	$("#image-holder").show();
	$(".timeTitle").hide();
	$(".triviaQuestion").hide();
	$("#textAreaOne").show();
	$("#textAreaTwo").show();
	$("#textAreaOne").html("What?! You're too slow");
	$("#textAreaTwo").html("You didn't answer");
	$("#answerOne").hide();
	$("#answerTwo").hide();
	$("#answerThree").hide();
	$("#answerFour").hide();
	responseImage = 2;
	displayImage();
	unanswered ++;
	questionDisplay ++;
	completedQuestions ++;
	questionTimer = 18;
	setTimeout(nextQuestion,3000);
}

// setInterval function
function startTimer() {
    let countdownTimer = setInterval(function() {
        questionTimer = questionTimer - 1;
        if (questionTimer < 0) {
            noResponse();
        }
         $("#timeKeeper").html("Time Remaining: "+questionTimer+" seconds");
    }, 1000);
}

// function to run the game
function nextQuestion() {
	$("#image-holder").hide();
	if (completedQuestions < 9) {
		$(".timeTitle").show();
		$(".triviaQuestion").show();
		$("#answerOne").show();
		$("#answerTwo").show();
		$("#answerThree").show();
		$("#answerFour").show();

		$("#textAreaOne").hide();
		$("#textAreaTwo").hide();
		$("#textAreaThree").hide();

		$(".triviaQuestion").html(questionArray[questionDisplay].question);
		$("#answerOne").html(questionArray[questionDisplay].responseOne);
		$("#answerTwo").html(questionArray[questionDisplay].responseTwo);
		$("#answerThree").html(questionArray[questionDisplay].responseThree);
		$("#answerFour").html(questionArray[questionDisplay].responseFour);
		$("#countdown").html(questionTimer);
		console.log(completedQuestions);
	}

	if (completedQuestions === 9) {
		endGame();
	}

}

function endGame() {
	$(function () {
     	$('#restart').removeClass('hidden');
	});	
	$("#image-holder").hide();
	$("#answerThree").hide();
	$("#textAreaThree").show();
	$(".triviaQuestion").html("You have complete the Game of Thrones");
	$("#textAreaOne").html("Correct Answers: "+correctAnswers);
	$("#textAreaTwo").html("Incorrect Answers: "+incorrectAnswers);
	$("#textAreaThree").html("Unanswered Questions: "+unanswered);
	setTimeout(reset,500);
}

// Running the games
$("#startButton").on("click", function(){
	startTimer();
	nextQuestion();
	 playAudio();
	 x.loop = true;
	$(this).hide();
	
})

// Running the restart button
$("#restart").on("click", function(){
	questionTimer=15;
	 $("#restart").addClass("hidden");
	nextQuestion();
})

// Gameplay
$(".answer").on("click", function(){
		userChoice=$(this).html();
		console.log(userChoice);
		if (userChoice === questionArray[questionDisplay].answer) {
			correctResponse();
			return;
		}
		if (userChoice!==questionArray[questionDisplay].answer){
			incorrectResponse();
			return;
		}
});