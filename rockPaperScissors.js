const words = ["rock", "paper", "scissors"];
function getComputerChoice() {
  const getRandomWord = Math.floor(Math.random() * words.length);
  return words[getRandomWord];
}

let humanScore = 0;
let computerScore = 0;

function updateScoreDisplay() {
  const scoreDisplay = document.getElementById("scoreDisplay");
  scoreDisplay.innerHTML = `Scores : Human: ${humanScore}, Computer: ${computerScore}`;
}

function checkWinner() {
  const displayResults = document.getElementById("displayResults");
  if (humanScore === 5) {
    displayResults.innerHTML = " Human wins the game!";
    resetGame();
  } else if (computerScore === 5) {
    displayResults.innerHTML = " Computer wins the game!";
    resetGame();
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  updateScoreDisplay();
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  const rules = {
    rock: { beats: "scissors" },
    paper: { beats: "rock" },
    scissors: { beats: "paper" },
  };

  let messageResult = `Human: ${humanChoice}, Computer: ${computerChoice}`;

  if (humanChoice === computerChoice) {
    messageResult += "It's a tie!";
    return;
  }

  if (rules[humanChoice].beats === computerChoice) {
    humanScore++;
    messageResult += "Human wins!";
  } else {
    computerScore++;
    messageResult += "Computer wins!";
  }

  displayResults.innerHTML = messageResult;
  updateScoreDisplay();
  checkWinner();
}

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

rockButton.addEventListener("click", function () {
  playRound("rock");
});

paperButton.addEventListener("click", function () {
  playRound("paper");
});

scissorsButton.addEventListener("click", function () {
  playRound("scissors");
});

updateScoreDisplay();
