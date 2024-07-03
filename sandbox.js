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
    let humanChoice = prompt("You(rock/paper/scissor): ");
    // Check if answere matches rock
    if (humanChoice.toLowerCase() === 'rock'){
        // if yes, then return rock
        return 'rock';
    }
    // Check if answer matches paper
    else if (humanChoice.toLowerCase() === 'paper'){
        // if yes. return paper
        return 'paper';
    }
    // Check if answer matches scissor
    else if (humanChoice.toLowerCase() === 'scissor'){
        // if yes reutrn scissor
        return 'scissor';
    }
    // If none above matches ask again
    else {
        return getHumanChoice();
    }
}

function rock_paper_scissor (p1, p2) {
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

// 3. Right logic to play single round of Rock-Paper scissor
function playGround() {
    // Get Player1 and Player2 choice
    p2 = getHumanChoice();
    p1 = getComputerChoice();
    
    // Print Human and Computer Choice to display to User
    console.log(`Human(rock/paper/scissor): ${p2}`);
    console.log(`Computer(rock/paper/scissor): ${p1}`);
    
    // 0 - Tie, 1 - Player1Wins, 2- Player2Wins
    return rock_paper_scissor(p1, p2)
    
}

function printScore(humanScore, computerScore) {
    console.log(`humanScore: ${humanScore}\ncomputerScore: ${computerScore}`)
}

// 4. Right logic to play n times and track score
// Create variable humanScore for human to track score and set to 0
// Creaete variable computerScore for computer to track score and set to 0
let humanScore = 0, computerScore = 0;
// Create variable ROUND for No of rounds and set it to 5
const ROUND = 5;
// Loop ROUND times
for (let i = 0; i < ROUND; i++) {
    // For every loop call playGround and get the value in variable called result
    result = playGround();
    // If 1 increment computerScore by 1
    if (result === 1) {
        computerScore += 1;
    }
    // if 2 increment humanSCore by 1
    else if (result === 2) {
        humanScore += 1;
    }

    printScore(humanScore, computerScore);
}

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