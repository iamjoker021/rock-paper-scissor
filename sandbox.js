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

// 3. Right logic to play single round of Rock-Paper scissor
function playGround(computerChoice, humanChoice) {
    // Get Player1 and Player2
    p1 = computerChoice;
    p2 = humanChoice;

    // if both player has same value
    if (p1 === p2){
        // tie: 0
        return 0
    }

    // If p1 is rock
    if (p1 === "rock"){
        // if it is rock vs paper
        if (p2 === "paper") {
            // then p2
            return 2
        }
        // if it is rock vs scissor
        else {
            // then p1
            return 1;
        }
    }

    // if p1 is paper
    if (p1 === "paper") {
        // if paper vs rock
        if (p2 === "rock") {
            // then p1
            return 1;
        }
        // if paper vs scissor
        else {
            // p2
            return 2;
        }
    }

    // if p1 is scissor
    if (p1 === "scissor") {
        // if scissor vs rock
        if (p2 === "rock") {
            // p2
            return 2;
        }
        // scissor vs paper
        else {
            // p1
            return 1;
        }
    }
}