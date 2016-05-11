$(document).ready(function() {

    var score = 0;

    $(document).on("click", "#increase-5", function() {
        //Step 1: Add 5 to score variable
        //Step 2: Represent the new score on the UI

        score = score + 5;
        // score += 5;

        $("#score").html(score + " Points");
    });

    $(document).on("click", "#decrease-5", function() {
        //Step 1: Subtract 5 to score variable
        //Step 2: Represent the new score on the UI

        if (score - 5 >= 0) {
            score = score - 5;
            // score += 5;

            $("#score").html(score + " Points");
        }
    });

    $(document).on("click", "#submit-custom-score", function() {
        //Parse score into an integer
        var newScore = $("#custom-score").val();
        var newNumberScore = parseInt(newScore);

        score = newNumberScore;

        $("#score").html(score + " Points");
    });

});
