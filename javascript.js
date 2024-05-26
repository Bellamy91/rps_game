let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
const winnerDiv = document.getElementById("winner");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        resultsDiv.textContent = `It's a tie! Both chose ${humanChoice}.`;
        return;
    }

    const winningCombos = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (winningCombos[humanChoice] === computerChoice) {
        humanScore++;
        resultsDiv.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultsDiv.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
    }

    scoreDiv.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

function declareWinner() {
    if (humanScore > computerScore) {
        winnerDiv.textContent = `You win the game! Final score: Human ${humanScore}, Computer ${computerScore}`;
    } else if (computerScore > humanScore) {
        winnerDiv.textContent = `You lose the game! Final score: Human ${humanScore}, Computer ${computerScore}`;
    }
    // Disable buttons after the game is over
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("rock").addEventListener("click", () => playRound("rock"));
    document.getElementById("paper").addEventListener("click", () => playRound("paper"));
    document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
});
