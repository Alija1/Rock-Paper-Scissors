

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0){
        return "rock"
    }
    else if (computerChoice === 1){
        return "paper"
    }
    else if (computerChoice === 2){
        return "scissors"
    }
    else "You have to type in Rock, Paper or Scissors!"
}
      

function getPlayerChoice() {
    const playerInput = prompt("type your choice: Rock, Paper or Scissors!").toLowerCase();
    return playerInput;
}



function playRound (computerSelection, playerSelection) {

    console.log(computerSelection)

    if (computerSelection === playerSelection) {
        return "it's a tie replay this round";
      } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You won this round! paper beats rock";
      } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "Computer won this round! rock beats scissors";
      } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You won this round! scissors beats paper";
      } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "Computer won this round! paper beats rock";
      } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You won this round! rock beats scissors";
      } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "Computer won this round! scissors beats paper";
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
