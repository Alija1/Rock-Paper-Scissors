

function getComputerChoice (hand)
{
    return hand[Math.floor(Math.random()*hand.length)];
}

let hand = ["Rock", "Paper", "Scissors"];
console.log(getComputerChoice(hand))