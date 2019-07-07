$(document).ready(function() {

    $("#timeRemaining").hide();
    $(".triviaQuestions").hide();
    $(".results").hide();

    correctAnswers = 0;
    incorrectAnswers = 0;
    unAnswered = 0;
    var number = 90;
    var intervalId;

    function showQuestions() {
        $("#timeRemaining").show();
        $(".triviaQuestions").show();
        $("#checkanswers").show();
    }

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        number--;
        $("#timeRemaining").html("<h2>Time remaining: " + number + " seconds</h2>");
        if (number === 1) {
            $("#timeRemaining").html("<h2>Time remaining: " + number + " second</h2>");
        }
        if (number === 0) {
            hide();
            displaySummary();
        }
    }

    function hide() {
        $("#timeRemaining").hide();
        $(".triviaQuestions").hide();
    }

    function displaySummary() {
        $(".results").show();
        $("#correctAnswerCount").text("Correct Answers: " + correctAnswers); 
        $("#incorrectAnswerCount").text("Incorrect Answers: " + incorrectAnswers); 
        $("#unAnsweredCount").text("Unanswered: " + unAnswered); 
    }

    $("#gameStart").on("click", function() {
        $("#startingBox").hide();
        $("#back-img").hide();
        showQuestions();
        run();
    }); 

    $("#checkAnswers").on("click", function() {
        hide();
        displaySummary();
    });

    $("input[type=radio]").on ("change", function() {
        correctAnswers = $("input[value = correct]:checked").length;
        incorrectAnswers = $("input[value = incorrect]:checked").length;
        unAnswered = (8 - (correctAnswers + incorrectAnswers));
    });

});