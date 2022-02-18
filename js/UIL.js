let pigDice = new PigDice();

function displayScore() {
    $("#player-1score").text(pigDice.player1);
    $("#player-2score").text(pigDice.player2);
}
$(document).ready(function () {
    let player = 1
    let score = 0;
    displayScore();
    $("#rotate").click(function () {
        let current = $("#player-" + player + "current");
        let dice = Math.floor(Math.random() * 6) + 1
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
    $("#hold").click(function () {
        function fade() {
            $(".player-" + player + "warning").css("opacity", "0");
       }
      setTimeout(fade, 200)
        pigDice.addScore(score, player);
        displayScore();
        changePlayer();
        score = 0;
        if(pigDice.player1 >= 150){
            $(".player-1winner").css("opacity" , "1")
            $(".action-btn").prop("disabled" , true)
        }else if(pigDice.player2 >= 150){
            $(".player-2winner").css("opacity" , "1");
            $(".action-btn").prop("disabled" , true)
        }
    })

    function changePlayer(){
        function fade() {
                 $(".player-" + player + "warning").css("opacity", "0");
            }
           setTimeout(fade, 200)
        $(".player").removeClass("active");
        $("#player-" + player + "current").text("0");
        if(player === 2){
            $("button").removeClass("btn-success");
            $("button").addClass("btn-primary");
            player = 1;
        }else{
            $("button").removeClass("btn-primary");
            $("button").addClass("btn-success");
            player ++;
        }
        $(".player-" + player).addClass("active")
    }

    $("#new-game").click(function(){
        $(".dice").text("0")
        $(".action-btn").prop("disabled" , false)
        pigDice.clearScore();
        $(".current").text("0")
        $("button").removeClass("disabled");
        $("button").removeClass("btn-success");
        $("button").addClass("btn-primary");
        $(".winner").css("opacity" , "0");
        displayScore();
        $(".player-2").removeClass("active");
        $(".player-1").addClass("active");
    })

})