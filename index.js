const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let humanScore = 0;
let computerScore = 0;

//Display the options
rl.question(
  "RPS Console Game\n Choice:\n 1. Rock\n 2. Paper\n 3. Scissor\n",
  (playerChoice) => {
    const playChoice = parseInt(playerChoice);

    //Validate user input
    if (![1, 2, 3].includes(playChoice)) {
      console.log("Invalid input, Please enter 1, 2, or 3");
      rl.close();
      return;
    }
    //Generate computer player Choice
    const compChoice = Math.floor(Math.random() * 3) + 1;

    console.log(`Your Choice: ${playChoice}\nComputer Choice: ${compChoice}`);

    //Determine the winner
    if (playChoice === compChoice) {
      console.log("It's a Tie!");
    } else if (
      (playChoice === 1 && compChoice === 3) ||
      (playChoice === 3 && compChoice === 2) ||
      (playChoice === 2 && compChoice === 1)
    ) {
      console.log("You Win!!!");
    } else {
      console.log("Computer Win!!!");
    }

    rl.close();
  }
);
