



const playerSelection = playerChoice();

function playerChoice() {

    const computerSelection = getComputerChoice();

    const btnR = document.querySelector('.btn-r');
    btnR.addEventListener('click', () => {
        if (getComputerChoice() === "rock") {
            const game = document.getElementById('gameContainer');
            game.innerHTML = "it's a tie replay this round";
            console.log("it's a tie replay this round");
        }
        else if
            (getComputerChoice() === "paper") {
            const game = document.getElementById('gameContainer');
            game.innerHTML = "paper beats rock! CPU wins!";
            console.log("paper beats rock! CPU wins!");
        }
        else if
            (getComputerChoice() === "scissors") {
            const game = document.getElementById('gameContainer');
            game.innerHTML = "rock beats scissors! You win!";
            console.log ("rock beats scissors! You win!");
        }
        else
            console.log("game failed");
    });

    const btnP = document.querySelector('.btn-p');
    btnP.addEventListener('click', () => {
        console.log(getComputerChoice());
        if (getComputerChoice() === "paper") {
            const game = document.getElementById('gameContainer');
            game.innerHTML = "it's a tie replay this round";
            console.log("it's a tie replay this round");
        }
        else if
            (getComputerChoice() === "scissors") {
            const game = document.getElementById('gameContainer');
            game.innerHTML = "scissors beats paper! CPU wins!";
            console.log("scissors beats paper! CPU wins!");
        }
        else if
            (getComputerChoice() === "rock") {
            const game = document.getElementById('gameContainer');
            game.innerHTML = "paper beats rock! You win!";
            console.log ("paper beats rock! You win!");
        }
        else
            console.log("Game failed");
    });

    const btnS = document.querySelector('.btn-s');
    btnS.addEventListener('click', () => {
        console.log(getComputerChoice());
        if (getComputerChoice() === "scissors") {
            const game = document.getElementById('gameContainer');
            game.innerHTML = "it's a tie replay this round";
            console.log("it's a tie replay this round");
        }
        else if
            (getComputerChoice() === "rock") {
            const game = document.getElementById('gameContainer');
            game.innerHTML = "rock beats scissors! CPU wins!";
            console.log("rock beats scissors! CPU wins!");
        }
        else if
            (getComputerChoice() === "paper") {
            const game = document.getElementById('gameContainer');
            game.innerHTML = "scissors beats paper! You win!";
            console.log ("scissors beats paper! You win!");
        }   
        else
            console.log("Game failed");
    });

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
        else console.log("Game failed");

        console.log(computerSelection);
    }
}

