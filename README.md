
Describe:PigDice();

Test:"It can be initialized and it contains the player1 and 2 scores"
Code:
let pigDice = new PigDice();
pigDice
Expected Output : {player1:0 , player2: 0};

Test: "The addscore method can add player1 score correctly"
Code:
let pigDice = new PigDice();
pigDice.addScore(300);
pigDice
Expected Output : {player1:300 , player2:0}

Test: "The addscore method can add player2 score correctly"
Code:
let pigDice = new PigDice();
pigDice.addScore(300);
pigDice
Expected Output : {player1:0 , player2:300}

Test: "The addscore method can add player1 score and player2 score correctly"
Code:
let pigDice = new PigDice();
pigDice.addScore(300 , 1);
pigDice.addScore(700 , 2);
pigDice
Expected Output : {player1:300 , player2:700}



# Application Details
### Application Author: [
    Name : Oladeji Daniel
    Github: Danny-ot
    PhoneNumber: 09021241205
    Email: oladejidaniel456@gmail.com
]

### Application Technology: [
    HTML
    CSS
    JAVASCRIPT
    GIT
    Github
    JQuery
]

### Application Description
*This is a two player gaming application about roling a dice and then adding it to your score and you will add your score until you reach 150 , then you will win*

### Application Git Branches: [
    main(default branch)
]

### Application challenges : 
1. I had challenges when i was writing the player score constructor.
2. I had challenges when i was creating the addscore method.
3. I had challenges when i was designing the user interface.
4. I had challenges when i was displaying the content on the user interface.

### Application Github  Information : [
    Repository Name : pigDice 
    Remote URL : https://github.com/Danny-ot/pigDice.git
]\