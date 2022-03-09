import { test } from "@jest/globals";
import PigDice from "./../src/pigDice";

describe('PigDice' , ()=>{
    test('should correctly create pigDice with two players' , ()=>{
        const pigDice = new PigDice();
        expect(pigDice.player1).toEqual(0);
        expect(pigDice.player2).toEqual(0);
    });

   
})