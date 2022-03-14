// Variable for initializing the pigdice constructor
import $ from 'jquery';
import 'bootStrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PigDice from './pigDice';
let pigDice = new PigDice();


// Function For Displaying the score
function displayScore() {
    $("#player-1score").text(pigDice.player1);
    $("#player-2score").text(pigDice.player2);
}

// Document ready method
$(document).ready(function () {
    let player = 1;
    let score = 0;
    displayScore();

    // The Rotate Click Method
    $("#rotate").click(function () {
        let current = $("#player-" + player + "current");
        let dice = Math.floor(Math.random() * 6) + 1;
        $(".dice").text(dice)
        if (dice !== 1) {
            score += dice;
            current.text(score);

        } else {
            $(".player-" + player + "warning").css("opacity", "1");


            changePlayer();
            score = 0;

        }

    })

    // The Hold Click Method
    $("#hold").click(function () {
        function fade() {
            $(".player-" + player + "warning").css("opacity", "0");
        }
        setTimeout(fade, 200)
        pigDice.addScore(score, player);
        displayScore();
        changePlayer();
        score = 0;
        if (pigDice.player1 >= 150) {
            $(".player-1winner").css("opacity", "1")
            $(".action-btn").prop("disabled", true)
        } else if (pigDice.player2 >= 150) {
            $(".player-2winner").css("opacity", "1");
            $(".action-btn").prop("disabled", true)
        }
    })

    // The ChangePlayer Function
    function changePlayer() {

        setTimeout(fade, 100)
        function fade() {
            $(".player-" + player + "warning").css("opacity", "0");
        }
        $(".player").removeClass("active");
        $("#player-" + player + "current").text("0");
        if (player === 2) {
            $("button").removeClass("btn-success");
            $("button").addClass("btn-primary");
            player = 1;
        } else {
            $("button").removeClass("btn-primary");
            $("button").addClass("btn-success");
            player++;
        }
        $(".player-" + player).addClass("active");
    }


        // New Game Click Method
    $("#new-game").click(function () {

        $(".player-warning").css("opacity", "0");
        $(".dice").text("0")
        $(".action-btn").prop("disabled", false)
        pigDice.clearScore();
        $(".current").text("0")
        $("button").removeClass("disabled");
        $("button").removeClass("btn-success");
        $("button").addClass("btn-primary");
        $(".winner").css("opacity", "0");
        displayScore();
        $(".player-2").removeClass("active");
        $(".player-1").addClass("active");
    })

})