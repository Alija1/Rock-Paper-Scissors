

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices.at(Math.floor(Math.random() * choices.length));
    return computerChoice;
}
      

function getPlayerChoice() {
    let playerInput = prompt("type your choice...");
    let result = playerInput.toLowerCase();
    return result;
}



function playRound (computerSelection, playerSelection) {

    if (computerSelection == playerSelection) {
        return "it's a tie replay this round";
      } else if (computerSelection == "rock" && playerSelection == "paper") {
        return "You lose! paper beats rock";
      } else if (computerSelection == "rock" && playerSelection == "scissors") {
        return "You win! rock beats scissors";
      } else if (computerSelection == "paper" && playerSelection == "scissors") {
        return "You lose!scissors beats paper";
      } else if (computerSelection == "paper" && playerSelection == "rock") {
        return "You win! paper beats rock";
      } else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "You lose! rock beats scissors";
      } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "You win! scissors beats paper";
      }
    }

const playerSelection = getPlayerChoice ();
const computerSelection = getComputerChoice();

console.log(playRound(computerSelection, playerSelection));


function game() {
    let computerScore = 0,
      playerScore = 0;
  
    for (i = 0; i < 3; i++) {
      const result = playRound(getPlayerChoice(), getComputerChoice());
      console.log(result);
      if (result.includes("win")) {
        playerScore++;
        console.log(`computer: ${computerScore} | player: ${playerScore}`);
      } else if (result.includes("lose")) {
        computerScore++;
        console.log(`computer: ${computerScore} | player: ${playerScore}`);
      }
      
    }
    console.log(
        "Final Results: Player: " + playerScore + " Computer: " + computerScore
      );
      if (playerScore > computerScore) {
        console.log("You win the game!");
      } else if (playerScore < computerScore) {
        console.log("You lose the game.");
      } else {
        console.log("The game was an overall tie.");
      }
  }
  
  game();
