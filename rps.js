let humanScore = 0;
let computerScore = 0;
let rounds = 0
const maxScore = 5;

let humanBoard = document.getElementById("humanScore");
let computerBoard = document.getElementById("computerScore");
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
let computerValue = document.getElementById('computerValue')
let results = document.querySelector('.results')

function getComputerChoice() {
    let choice = Math.random()

    if (choice <= 0.3) {
        return "Rock"
    }
    else if (choice > 0.3 && choice <= 0.6) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

function getHumanChoice(choice) {

    round(choice)
}

function playRound(humanChoice, computerChoice) {

    if ((humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Scissors" && computerChoice == "Paper")) {
        return "You won"
    }
    else if (humanChoice == computerChoice) {
        return "Draw"
    }
    else {
        return "You Lose"
    }

}

function disabled() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}


function round(HumanChoice) {
    const computerSelection = getComputerChoice()
    computerValue.value = computerSelection;

    result = playRound(HumanChoice, computerSelection)

    if (result == "You won") {
        humanScore += 1;
    }
    else if (result = "You Lose") {
        computerScore += 1
    }
    else {
        humanScore += 1;
        computerScore += 1;
    }

    computerValue.innerHTML = `Computer Score : ${computerScore}`;
    humanBoard.innerHTML = `Human Score : ${humanScore}`;
    computerBoard.innerHTML = `Computer Score : ${computerScore}`;

    if (humanScore == maxScore) {
        let message = document.createElement('h1')
        message.innerHTML = `You Win`
        results.appendChild(message)

        disabled()
    }
    else if (computerScore == maxScore) {
        let message = document.createElement('h1')
        message.innerHTML = `You Lose`
        results.appendChild(message)
        disabled()
    }
}
