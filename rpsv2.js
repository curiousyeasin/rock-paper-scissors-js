let humanScore = 0;
let computerScore = 0;

function computerChoice() {
  const randNameGenerator = Math.floor(Math.random() * 3);
  if (randNameGenerator === 0) {
    return "rock";
  } else if (randNameGenerator === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

function humanChoice() {
  const humanChoice = prompt("Enter you choice:\n Rock\n Paper or\n Scissor");
  return humanChoice.trim().toLowerCase();
}

function determineWinner(hChoice, cChoice) {
  if (hChoice === cChoice) {
    alert(
      "Human choice is: " +
        hChoice +
        "\nComputer choice is: " +
        cChoice +
        "\nSo it's a Tie!"
    );
    humanScore += 1;
    computerScore += 1;
  } else if (
    (hChoice === "rock" && cChoice === "scissor") ||
    (hChoice === "scissor" && cChoice === "paper") ||
    (hChoice === "paper" && cChoice === "rock")
  ) {
    alert(
      "Human choice is: " +
        hChoice +
        "\nComputer choice is: " +
        cChoice +
        "\nSo Human Win!"
    );
    humanScore += 1;
  } else {
    alert(
      "Human choice is: " +
        hChoice +
        "\nComputer choice is: " +
        cChoice +
        "\nSo Computer Win!"
    );
    computerScore += 1;
  }

  //   alert("human choice is: " + hChoice);
  //   alert("computer choice is: " + cChoice);
}

function playRound() {
  for (let i = 1; i <= 5; i++) {
    alert(
      "ROUND " +
        i +
        "\nHuman Score: " +
        humanScore +
        ", Computer Score: " +
        computerScore
    );
    const hChoice = humanChoice();
    const cChoice = computerChoice();
    determineWinner(hChoice, cChoice);
  }
  if (humanScore === computerScore) {
    alert("It's a Tie!");
  } else if (humanScore > computerScore) {
    alert("Congrats! Highest Scorer is Human!");
  } else {
    alert("Congrats! Highest Scorer is Computer!");
  }
}

playRound();
