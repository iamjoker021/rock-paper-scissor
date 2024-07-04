
// Get Computer Choice
function getComputerChoice() {
    // Get random number from 1 to 3
    let randomNum = Math.floor(Math.random() * 3) + 1;

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

    // Arrange option in way that:  current elem is killed by next elem in rolling way
    // Rock(0) < Paper(1) < Scissor(2) < Rock(0)
    const options = ['rock', 'paper', 'scissor']
    player1Choice = options.indexOf(player1Choice)
    player2Choice = options.indexOf(player2Choice)
    
    // If the player2 choose next elem then he wins, else it must appear before so player1 wins
    if ( (player1Choice+1 )%3 === player2Choice ) {
        return 2;
    }
    else {
        return 1;
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
        finalResult.appendChild(humanScorePara);

        const computerScorePara = document.createElement('p');
        computerScorePara.textContent = `computerScore: ${computerScore}`;
        finalResult.appendChild(computerScorePara);

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
