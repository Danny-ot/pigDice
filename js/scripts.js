
// Constructor For The PigDice
function PigDice(){
 this.player1 = 0
 this.player2 = 0
}

//  Method For Adding Player1 Score
PigDice.prototype.addPlayer1Score = function(score){
    this.player1 += score;
}

// Method For Adding 