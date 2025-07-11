function getComputerChoice() {
    let random = Math.random();
    if (random < 1/3) {
        return "rock";
    } else if (random < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function announceWinner() {
    let message = '';
    if (humanScore > computerScore) {
        message = "Final winner is you!";
    } else {
        message = "Final winner is computer!";
    }
    displayMessage(message + " Click any button to restart a game!");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let roundResult = '';

    if ((humanChoice === "rock" && computerChoice === "scissors") 
    || (humanChoice === "paper" && computerChoice === "rock")
    || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
    } else if ((humanChoice === "rock" && computerChoice === "paper") 
    || (humanChoice === "paper" && computerChoice === "scissors")
    || (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        roundResult = `You lose! ${computerChoice} beats ${humanChoice}`;
    } else {
        roundResult = `Tie`;
    }
    let totalScore = `Score(You vs Computer): ${humanScore} vs ${computerScore}`;
    displayMessage(`${roundResult}. ${totalScore}`);
    endGame();
}

const body = document.querySelector("body");
body.addEventListener("click", e => {
    playRound(e.target.textContent, getComputerChoice());
});

const result = document.querySelector("#result");

function displayMessage(message) {
    result.textContent = message;
}

function endGame() {
    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
        humanScore = 0;
        computerScore = 0;
    }
}