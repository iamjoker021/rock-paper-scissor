// Task:
// Build Rock Paper Scissor game in Console

// Sub-Tasks
// 1. Get Compute choice
// 2. Get Human Choice
// 3. Right logic to play single round of Rock-Paper scissor
// 4. Right logic to play n times and track score

// 1. Get Computer Choice
function getComputerChoice() {
    // Get Random Number between 1 to 9
    let randomNum = Math.floor(Math.random() * (9 - 1 + 1)) + 1; // Got this in internet to get random min to max: Math.floor(Math.random() * (max - min + 1)) + min

    if (randomNum <= 3) {
        return 'rock'
    }
    else if (randomNum > 3 && randomNum <= 6) {
        return 'paper';
    }
    else if (randomNum > 6) {
        return 'scissor';
    }
}

// 2. Get Human Choice
function getHumanChoice() {
    let humanChoice;

    if (humanChoice.toLowerCase() === 'rock'){
        return 'rock';
    }
    else if (humanChoice.toLowerCase() === 'paper'){
        return 'paper';
    }
    else if (humanChoice.toLowerCase() === 'scissor'){
        return 'scissor';
    }
    else {
        return getHumanChoice();
    }
}

function rock_paper_scissor(p1, p2) {
    if (p1 === p2){
        return 0
    }

    if (p1 === "rock"){
        if (p2 === "paper") {
            return 2
        }
        else {
            return 1;
        }
    }
    else if (p1 === "paper") {
        if (p2 === "rock") {
            return 1;
        }
        else {
            return 2;
        }
    }
    else if (p1 === "scissor") {
        if (p2 === "rock") {
            return 2;
        }
        else {
            return 1;
        }
    }
}

// 3. Right logic to play single round of Rock-Paper scissor
// function playGround() {
//     p2 = getHumanChoice();
//     p1 = getComputerChoice();
    
//     // Print Human and Computer Choice to display to User
//     console.log(`Human(rock/paper/scissor): ${p2}`);
//     console.log(`Computer(rock/paper/scissor): ${p1}`);
    
//     // 0 - Tie, 1 - Player1Wins, 2- Player2Wins
//     return rock_paper_scissor(p1, p2)
    
// }

function printScore(humanChoice, computerChoice, humanScore, computerScore) {
    console.log(`humanChoice: ${humanChoice}\ncomputerChoice: ${computerChoice}\nhumanScore: ${humanScore} vs computerScore: ${computerScore}`)
}

// 4. Right logic to play n times and track score

let humanScore = 0, computerScore = 0;
const ROUND = 5;

// Add event lister to get humanChoice
const choiceButton = document.querySelector('.button-options');
choiceButton.addEventListener('click', (e) => {
    let humanChoice = e.target.value;
    let computerChoice = getComputerChoice();

    // 0 - Tie, 1 - Computer, 2 - Human
    let result = rock_paper_scissor(computerChoice, humanChoice);
    
    if (result === 1) {
        computerScore += 1;
    }
    else if (result === 2) {
        humanScore += 1;
    }

    printScore(humanChoice, computerChoice, humanScore, computerScore);
})

// for (let i = 0; i < ROUND; i++) {
//     result = playGround();
//     // If 1 then computerWin
//     if (result === 1) {
//         computerScore += 1;
//     }
//     // if 2 then humanWin
//     else if (result === 2) {
//         humanScore += 1;
//     }

//     printScore(humanScore, computerScore);
// }

// Once Loop end, print the Winner
if (computerScore > humanScore) {
    console.log("Computer Won");
}
else if (humanScore > computerScore) {
    console.log("You Won");
}
else {
    console.log("TIEEEE");
}

