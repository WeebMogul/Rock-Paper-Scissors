console.log("Hello World")

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

function getHumanChoice() {
    h_choice = prompt("Which do you pick ?\n - Rock \n - Paper \n - Scissors")
    return h_choice
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

humanScore = 0;
computerScore = 0;

rounds = 0

while (rounds < 5) {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    result = playRound(humanSelection, computerSelection)

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

    rounds++;
}

if (humanScore > computerScore) {
    console.log(`Human Score : ${humanScore}. You Win`)
}
else {
    console.log("You Lose")
}