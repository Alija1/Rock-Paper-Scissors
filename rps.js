

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

document.getElementById("btn").click = function getPlayerChoice() {
    const playerInput = document.getElementById("btn").value;

    if (playerInput === "0"){
        return "rock"
    }
    else if (playerInput === "1"){
        return "paper"
    }
    else (playerInput === "2")
        return "scissors"
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