let repeatedTimes = 0;
computerWin = 0;
userWin = 0;

function playRound() {
    
    let userInput = prompt("Rock, paper or scissors?");
    userInput = userInput.toLowerCase();

if (userInput === "rock"){
    userInput = 1;
    console.log("You chose Rock")
} else if (userInput === "paper"){
    userInput = 2;
    console.log("You chose Paper")
} else if (userInput === "scissors") {
    userInput = 3;
    console.log("You chose Scissors")
} else {
    alert("Invalid choice, computer win.");
    computerWin += 1;
};

let computerInput = Math.floor(Math.random() * 100);

if (computerInput <= 33) {
    computerInput = 1;
    console.log("Computer chose Rock");
} else if (computerInput >= 34 && computerInput <= 67) {
    computerInput = 2;
    console.log("Computer chose Paper");
} else {
    computerInput = 3;
    console.log("Computer chose Scissors");
};

if (userInput === 1 && computerInput === 2) {
    alert("Computer chose paper. You lose!");
    computerWin += 1;
} else if(userInput === 1 && computerInput === 3) {
    alert("Computer chose scissors. You win!");
    userWin += 1;
} else if(userInput === 2 && computerInput === 3) {
    alert("Computer chose scissors. You lose!");
    computerWin += 1;
} else if(userInput === 2 && computerInput === 1) {
    alert("Computer chose rock. You win!");
    userWin += 1;
} else if(userInput === 3 && computerInput === 1) {
    alert("Computer chose rock. You lose!");
    computerWin += 1;
} else if(userInput === 3 && computerInput === 2) {
    alert("Computer chose paper. You win!");
    userWin += 1;
} else if(userInput === computerInput) {
    alert("Computer chose the same. It's a draw.");
};
    repeatedTimes += 1;
    console.log("Rounds played: " + repeatedTimes);
    console.log("Your score: " + userWin);
    console.log("Computer score: " + computerWin);
    alert("Your score: " + userWin + " Computer score: " + computerWin);
};

function playGame() {
    for (i = 0; i < 5; i++) {
        playRound();
        if (computerWin === 3) {
            alert("You lost the game.");
            computerWin = 0;
            userWin = 0;
            return;
        } else if (userWin === 3) {
            alert("You won the game!");
            computerWin = 0;
            userWin = 0;
            return;
        };
    }
    if (userWin > computerWin) {
            alert("You won the game!");
            computerWin = 0;
            userWin = 0;
        } else if (userWin < computerWin) {
            alert("You lost the game.")
            computerWin = 0;
            userWin = 0;
        } else if (userWin === computerWin && repeatedTimes != 0) {
            alert("The game ended in a draw.")
            computerWin = 0;
            userWin = 0;
        };
};

