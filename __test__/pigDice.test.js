import { test } from "@jest/globals";
import PigDice from "./../src/pigDice";

describe('PigDice' , ()=>{
    let pigDice;

    beforeEach(()=>{
        pigDice = new PigDice();
    });
    test('should correctly create pigDice with two players' , ()=>{
        expect(pigDice.player1).toEqual(0);
        expect(pigDice.player2).toEqual(0);
    });

   test('the add score method should correctly add player1 score' , ()=>{
       pigDice.addScore(23 , 1);
       expect(pigDice.player1).toEqual(23);
   });

   test('it should correctly add both player1 and player2 scores correctly' , ()=>{
       pigDice.addScore(20 , 1);
       pigDice.addScore(45 , 2 );
       expect(pigDice.player1).toEqual(20);
       expect(pigDice.player2).toEqual(45);
   });
   
   test('it should be able to correctly clear both scores' , ()=>{
       pigDice.clearScore();
       expect(pigDice.player1).toEqual(0);
       expect(pigDice.player2).toEqual(0);
   })
})