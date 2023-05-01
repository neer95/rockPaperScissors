"use strict";

function getComputerChoice() {
    const items = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * items.length);
    return items[random];
}

function getPlayerSelection() {
    let playerChoice = prompt("Is it Rock, Paper or Scissors?");
    return playerChoice;
}

function playGame(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                console.log(
                    `Player wins! ${computerSelection} beats ${playerSelection}`
                );
                break;
            } else if (computerSelection === "paper") {
                console.log(
                    `Computer wins! ${computerSelection} beats ${playerSelection}`
                );
                break;
            } else {
                console.log(`It's a draw`);
            }
        case "paper":
            if (computerSelection === "rock") {
                console.log(
                    `Player wins! ${computerSelection} beats ${playerSelection}`
                );
                break;
            } else if (computerSelection === "scissors") {
                console.log(
                    `Computer wins! ${computerSelection} beats ${playerSelection}`
                );
                break;
            } else {
                console.log(`It's a draw`);
            }
        case "scissors":
            if (computerSelection === "rock") {
                console.log(
                    `Player wins! ${computerSelection} beats ${playerSelection}`
                );
                break;
            } else if (computerSelection === "paper") {
                console.log(
                    `Computer wins! ${computerSelection} beats ${playerSelection}`
                );
                break;
            } else {
                console.log(`It's a draw`);
            }
    }
}
/** Our game starts here  */
function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice().toLowerCase();
        const playerSelection = getPlayerSelection().toLowerCase();
        playGame(playerSelection, computerSelection);
    }
}

game();
