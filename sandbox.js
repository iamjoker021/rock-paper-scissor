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
    let randomNum = Math.floor(Math.random() * 3) + 1; // Got this in internet to get random min to max: Math.floor(Math.random() * (max - min + 1)) + min

    if (randomNum === 1) {
        return 'rock'
    }
    else if (randomNum === 2) {
        return 'paper';
    }
    else if (randomNum === 3) {
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

function printScoreToHTML(round, humanChoice, computerChoice, humanScore, computerScore) {    
    const printElem = document.querySelector('ul.round-result');

    const list = document.createElement('li');
    
    const resultBlock = document.createElement('div');
    
    const roundPara = document.createElement('p');
    roundPara.textContent = `ROUND: ${round}`;
    resultBlock.appendChild(roundPara);
    
    const humanChoicePara = document.createElement('p');
    humanChoicePara.textContent = `humanChoice: ${humanChoice}`;
    resultBlock.appendChild(humanChoicePara);
    
    const computerChoicePara = document.createElement('p');
    computerChoicePara.textContent = `computerChoice: ${computerChoice}`;
    resultBlock.appendChild(computerChoicePara);
    
    const roundResultPara = document.createElement('p');
    roundResultPara.textContent = `humanScore: ${humanScore} vs computerScore: ${computerScore}`;
    resultBlock.appendChild(roundResultPara);

    list.appendChild(resultBlock);
    
    printElem.appendChild(list);
}

// 4. Right logic to play n times and track score

let humanScore = 0, computerScore = 0;
let roundNum = 1;

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

    printScoreToHTML(roundNum, humanChoice, computerChoice, humanScore, computerScore);
    roundNum++;
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

