export default function pigDice(){
    this.player1 = 0;
    this.player2 = 0;
}

pigDice.prototype.addScore = function(score , player ){
     if(player === 1){
         this.player1 += score
     }else{
         this.player2 += score
     }
}

pigDice.prototype.clearScore = function(){
    this.player1 = 0 ;
    this.player2 = 0 ;
}
