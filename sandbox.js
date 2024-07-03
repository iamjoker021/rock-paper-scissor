// Task:
// Build Rock Paper Scissor game in Console

// Sub-Tasks
// 1. Get Compute choice
// 2. Get Human Choice
// 3. Right logic to play single round of Rock-Paper scissor
// 4. Right logic to play n times

// 1. Get Computer Choice
function getComputerChoice() {
    // Get Random Number between 1 to 9
    let randomNum = Math.floor(Math.random() * (9 - 1 + 1)) + 1; // Got this in internet to get random min to max: Math.floor(Math.random() * (max - min + 1)) + min        
    // If number is less than or equal to 3
    if (randomNum <= 3) {
        //  then rocks
        return 'rock'
    }
    // elif number is between 3 and 6
    else if (randomNum > 3 && randomNum <= 6) {
        // then paper
        return 'paper';
    }
    // elif number is between 6 and 9 or greate than 6
    else if (randomNum > 6) {
        // them scissor
        return 'scissor';
    }
}

// 2. Get Human Choice
function getHumanChoice() {
    // Get user input
    let humanChoice = prompt("rock/paper/scissor: ");
    // Check if answere matches rock
    if (humanChoice.toLowerCase() == 'rock'){
        // if yes, then return rock
        return 'rock';
    }
    // Check if answer matches paper
    else if (humanChoice.toLowerCase() == 'paper'){
        // if yes. return paper
        return 'paper';
    }
    // Check if answer matches scissor
    else if (humanChoice.toLowerCase() == 'rock'){
        // if yes reutrn scissor
        return 'scissor';
    }
    // If none above matches ask again
    else {
        return getHumanChoice();
    }
}