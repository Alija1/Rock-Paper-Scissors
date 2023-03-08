



let playerSelection = playerChoice();

function playerChoice() {

    let computerSelection = getComputerChoice();

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

        console.log(computerSelection);
    }

    const btnR = document.querySelector('.btn-r');
    btnR.addEventListener('click', () => {
        if (getComputerChoice() === "rock") {
            console.log(getComputerChoice());
            console.log("it's a tie replay this round");
        }
        else if
            (getComputerChoice() === "paper") {
            console.log(getComputerChoice());
            console.log("paper beats rock! CPU wins!");
        }
        else
            console.log ("rock beats scissors! You win!");
    });

    const btnP = document.querySelector('.btn-p');
    btnP.addEventListener('click', () => {
        console.log(getComputerChoice());
        if (getComputerChoice() === "paper") {
            console.log("it's a tie replay this round");
        }
        else if
            (getComputerChoice() === "rock") {
            console.log("scissors beats paper! CPU wins!");
        }
        else console.log ("paper beats rock! You win!");
    });

    const btnS = document.querySelector('.btn-s');
    btnS.addEventListener('click', () => {
        console.log(getComputerChoice());
        if (getComputerChoice() === "scissors") {
            console.log("it's a tie replay this round");
        }
        else if
            (getComputerChoice() === "rock") {
            console.log("rock beats scissors! CPU wins!");
        }
        else console.log ("scissors beats paper! You win!");
    });
}