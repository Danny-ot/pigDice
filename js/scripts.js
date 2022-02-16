
// Constructor For The PigDice
function PigDice() {
    this.player1 = 0
    this.player2 = 0
}

//  Method For Adding Player score
PigDice.prototype.addScore = function (score, player) {
    if (player === 1) {
        this.player1 += score;
    } else {
        this.player2 += score;
    }
};

// Method for clearing the scores 
PigDice.prototype.clearScore = function(){
    this.player1 = 0;
    this.player2 = 0;
};