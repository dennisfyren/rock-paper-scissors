alert("Press F12 and open console to play!");
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
    console.log("Invalid choice, try again!");
    alert("Invalid choice!")
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
    alert("You lose!");
} else if(userInput === 1 && computerInput === 3) {
    alert("You win!");
} else if(userInput === 2 && computerInput === 3) {
    alert("You lose!");
} else if(userInput === 2 && computerInput === 1) {
    alert("You win!");
} else if(userInput === computerInput) {
    alert("It's a draw.");
} else {
    location.reload();
}

location.reload();