/* Pseudo
- RNG factor of CPU
- Take in players choice
- compare values to see who won
- keep track of score, game ends at 5 points
*/

function rpsGame (playerMove) {

    // CPU RNG
    let randNum =  Math.floor(Math.random() * (9 - 1)) + 1;

    if (randNum === 1 || randNum === 4 || randNum === 7) {
        let compMove = rock;
    }
    
    if (randNum === 2 || randNum === 5 || randNum === 8) {
        let compMove = paper;
    }
    
    if (randNum%3 === 0) {
        let compMove = scissor;
    }

    // outcomes
    if (compMove === rock && playerMove === scissor) {
        return "You lost!"
    }
    if (compMove === rock && playerMove === paper) {
        return "You won!"
    }
    if (compMove === rock && playerMove === rock) {
        return "It's a draw!"
    }

    if (compMove === paper && playerMove === scissor) {
        return "You won!"
    }
    if (compMove === paper && playerMove === paper) {
        return "It's a draw!"
    }
    if (compMove === paper && playerMove === rock) {
        return "You lost!"
    }

    if (compMove === scissor && playerMove === scissor) {
        return "It's a draw!"
    }
    if (compMove === screen && playerMove === paper) {
        return "You lost!"
    }
    if (compMove === scissor && playerMove === rock) {
        return "You won!"
    }
}