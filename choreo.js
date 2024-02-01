/* Pseudo
- RNG factor of CPU
- Take in players choice with prompt
- compare values to see who won
- keep track of score, game ends at 5 points
- need to take a new input after every round
*/

// function rocky () {
//     rpsGame("rock");
// }

// function papery () {
//     rpsGame("paper");
// }

// function scissory () {
//     rpsGame("scissor");
// }


//cpu rng
/*
function cpuChoice () {
    let compMove = "";
    let randNum =  Math.floor(Math.random() * (9 - 1)) + 1;

    if (randNum === 1 || randNum === 4 || randNum === 7) {
        compMove = "rock";
        return compMove;
    }
        
    if (randNum === 2 || randNum === 5 || randNum === 8) {
        compMove = "paper";
        return compMove;
    }
        
    if (randNum%3 === 0) {
        compMove = "scissor";
        return compMove;
    }
}
*/


function rpsGame (playerMove) {
    let cpuScore = 0;
    let playerScore = 0;
    

    while (cpuScore < 3 || playerScore < 3) { // game ends when either player gets 3 points

        // CPU RNG called here
        // cpuChoice();
        // console.log(compMove);

        let playerMove = prompt("What say you?");
        playerMove = playerMove.toLowerCase();

        let compMove = "";
        let randNum =  Math.floor(Math.random() * (9 - 1)) + 1;
    
        if (randNum === 1 || randNum === 4 || randNum === 7) {
            compMove = "rock";
        }
            
        if (randNum === 2 || randNum === 5 || randNum === 8) {
            compMove = "paper";
        }
            
        if (randNum%3 === 0) {
            compMove = "scissor";
        }

        

        // Outcomes
        if (compMove === "rock" && playerMove === "scissor") {
            cpuScore++;
            console.log(cpuScore, playerScore);
            console.log("CPU picked " + compMove + ", you lost!");
        }
        if (compMove === "rock" && playerMove === "paper") {
            playerScore++;
            console.log(cpuScore, playerScore);
            console.log("CPU picked " + compMove + "You won!");
        }
        if (compMove === "rock" && playerMove === "rock") {
            console.log("CPU picked " + compMove + "It's a draw!")
        }

        if (compMove === "paper" && playerMove === "scissor") {
            playerScore++;
            console.log(cpuScore, playerScore);
            console.log("CPU picked " + compMove + "You won!")
        }
        if (compMove === "paper" && playerMove === "paper") {
            console.log("CPU picked " + compMove + "It's a draw!")
        }
        if (compMove === "paper" && playerMove === "rock") {
            cpuScore++;
            console.log(cpuScore, playerScore);
            console.log("CPU picked " + compMove + "You lost!")
        }

        if (compMove === "scissor" && playerMove === "scissor") {
            console.log("CPU picked " + compMove + "It's a draw!")
        }
        if (compMove === "screen" && playerMove === "paper") {
            cpuScore++;
            console.log(cpuScore, playerScore);
            console.log("CPU picked " + compMove + "You lost!")
        }
        if (compMove === "scissor" && playerMove === "rock") {
            playerScore++;
            console.log(cpuScore, playerScore);
            console.log("CPU picked " + compMove + "You won!")
        }
    }

    if (playerScore === 3) {
        return "You beat the CPU: " + playerScore + " to " + cpuScore;
    }

    if(cpuScore === 3) {
        return "You lost: " + cpuScore + " to " + playerScore;
    }
}

console.log(rpsGame());