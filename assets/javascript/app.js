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
        if (number ===1) {
            $("#timeRemaining").html("<h2>Time remaining: " + number + " second</h2>");
        }
        if (number === 0) {
            hide();
            displaySummary();
        }
    }

    function hide(){
        $("#timeRemaining").hide();
        $(".triviaQuestions").hide();
        $(".results").show();
    }

    function displaySummary(){
        unAnswered = (20-(correctAnswers + incorrectAnswers));
        correctAnswers = $("input[value=correct]:checked").length;
        incorrectAnswers = $("input[value=wrong]:checked").length;
        unAnswered = (20 - (correctAnswers + incorrectAnswers));
        $('#unAnswered').text("Unanswered questions:" + " " + unAnswered); 
    }

    $("#gameStart").on("click", function() {
        $("#startingPoint").hide();
        showQuestions();
        run();
    }); 

    $("#checkAnswers").on("click", function() {
        hide();
        displaySummary();
    });

});