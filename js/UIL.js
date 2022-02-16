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
        if (dice !== 1) {
            score += dice;
            current.text(score);

        } else {
            $(".player-" + player + "warning").css("opacity", "1");
            
            
            changePlayer();
            score = 0;

        }

    })
    

})