
// Get Computer Choice
function getComputerChoice() {
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

// Logic for RockPaperScissor
function rockPaperScissorLogic(player1Choice, player2Choice) {
    if (player1Choice === player2Choice){
        return 0
    }

    if (player1Choice === "rock"){
        if (player2Choice === "paper") {
            return 2
        }
        else {
            return 1;
        }
    }
    else if (player1Choice === "paper") {
        if (player2Choice === "rock") {
            return 1;
        }
        else {
            return 2;
        }
    }
    else if (player1Choice === "scissor") {
        if (player2Choice === "rock") {
            return 2;
        }
        else {
            return 1;
        }
    }
}

// Print the Round result to HTML
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

// Variables to track the Game
let humanScore = 0, computerScore = 0;
let roundNum = 0;

// Add event lister to get humanChoice, trigger game on Click
const choiceButtons = document.querySelector('.button-options');
choiceButtons.addEventListener('click', (e) => {
    let computerChoice = getComputerChoice();
    let humanChoice = e.target.value;

    // 0 - Tie, 1 - Player1/Argument1 wins the game, 2 - Player2/Argument2 wins the game
    let result = rockPaperScissorLogic(player1Choice= computerChoice, player2Choice= humanChoice);
    
    if (result === 1) {
        computerScore += 1;
    }
    else if (result === 2) {
        humanScore += 1;
    }

    roundNum++;
    printScoreToHTML(roundNum, humanChoice, computerChoice, humanScore, computerScore);

    if (roundNum === 5) {
        // Print the Final Result
        const finalResult = document.querySelector('div.final-result');
        
        const humanScorePara = document.createElement('p');
        humanScorePara.textContent = `humanScore: ${humanScore}`;
        finalResult.appendChild(humanScore);

        const computerScorePara = document.createElement('p');
        computerScorePara.textContent = `humanScore: ${computerScore}`;
        finalResult.appendChild(computerScore);

        const resultPara = document.createElement('h4');
        if (humanScore > computerScore) {
            resultPara.textContent += `Human won Computer by ${humanScore - computerScore} points`
        }
        else if (computerScore > humanScore) {
            resultPara.textContent += `Computer won Human by ${computerScore- humanScore} points`
        }
        else {
            resultPara.textContent += "This is TIEEEEE"
        }
        finalResult.appendChild(resultPara);

        // Disable all Buttons
        const choiceButtons = document.querySelectorAll('button')
        for (const button of choiceButtons) {
            button.disabled = true;
        }
    }
})
