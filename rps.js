const playerSelection = prompt("Input: Rock, Paper or Scissors");



function getComputerChoice() {
    const computerHand = ["Rock", "Paper", "Scissors"];
    return computerHand [Math.floor(Math.random()*computerHand.length)];
}


console.log(getComputerChoice())

const computerSelection = getComputerChoice();



function playRound (x, y) {

            if (computerSelection === "Rock"){
                if (playerSelection === "Rock"){
                    console.log("Both players picked the same hand. Play again!")
                }
                
            }

            else if (computerSelection === "Rock"){
                if (playerSelection === "Scissors"){
                   console.log("Rock beats Scissors! You lose!")
                }
                
            }

            else if (computerSelection === "Rock"){
                if (playerSelection === "Paper"){
                    console.log("Paper beats Rock! You win!")
                }
            }

            else if (computerSelection === "Paper"){
                if (playerSelection === "Paper"){
                    console.log("Both players picked the same hand. Play again!")
                }
            }

            else if (computerSelection === "Paper"){
                if (playerSelection === "Rock"){
                    console.log("Paper beats Rock! You lose!")
                }
            }

            else if (computerSelection === "Paper"){
                if (playerSelection === "Scissors"){
                    console.log("Scissors beats Paper! You win!")
                }
            }

            else if (computerSelection === "Scissors"){
                if (playerSelection === "Scissors"){
                    console.log("Both players picked the same hand. Play again!")
                }
            }

            else if (computerSelection === "Scissors"){
                if (playerSelection === "Paper"){
                    console.log("Scissors beats Paper! You lose!")
                }
            }

            else if (computerSelection === "Scissors"){
                if (playerSelection === "Rock"){
                console.log("Rock beats Scissors! You win!")
                }
            }

}


console.log(playRound(computerSelection, playerSelection))
