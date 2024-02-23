document.getElementById("btnRock").addEventListener("click", rockClicked);  
document.getElementById("btnPaper").addEventListener("click", paperClicked);
document.getElementById("btnScissor").addEventListener("click", scissorClicked);


 
function rockClicked() {
    rpsGame2("rock");
}

function paperClicked() {
    rpsGame2("paper");
}

function scissorClicked() {
    rpsGame2("scissor");
}

/*got stuck on this for a long time because initially i had document.getElementById("btnRock").addEventListener("click", rpsGame2("rock"));
and it would instantly go off when the page loaded as well as make the buttons unclickable.

fix: 
- callback functions stop it from going off automatically even though it's a button set to "click"!
- also defer when using script src
- set the type of the button, there are 3 types: button, submit, and reset
- moved all scripts to the javascript file, I had some in the body before
- added the button id so I can use addeventlistener (which you need getelementbyid to use)
*/
let cpuScore = 0;
let playerScore = 0;

function rpsGame2 (playerMove){
    

    // computer moves at random using rng
    let compMove = "";
    const randNum =  Math.floor(Math.random() * (9 - 1)) + 1;
    
        if (randNum === 1 || randNum === 4 || randNum === 7) {
            compMove = "rock";
        }
            
        if (randNum === 2 || randNum === 5 || randNum === 8) {
            compMove = "paper";
        }
            
        if (randNum%3 === 0) {
            compMove = "scissor";
        }

        if (compMove === "rock" && playerMove === "scissor") {
            cpuScore++;
            console.log(cpuScore, playerScore);
            console.log("CPU picked " + compMove + ", you lost!");
        }
        if (compMove === "rock" && playerMove === "paper") {
            playerScore++;
            console.log(cpuScore, playerScore);
            console.log("CPU picked " + compMove + ", you won!");
        }
        if (compMove === "rock" && playerMove === "rock") {
            console.log("CPU picked " + compMove + ", it's a draw!")
        }
        if (compMove === "paper" && playerMove === "scissor") {
            playerScore++;
            console.log(cpuScore, playerScore);
            console.log("CPU picked " + compMove + ", you won!")
        }
        if (compMove === "paper" && playerMove === "paper") {
            console.log("CPU picked " + compMove + ", it's a draw!")
        }
        if (compMove === "paper" && playerMove === "rock") {
            cpuScore++;
            console.log(cpuScore, playerScore);
            console.log("CPU picked " + compMove + ", you lost!")
        }

        if (compMove === "scissor" && playerMove === "scissor") {
            console.log("CPU picked " + compMove + ", it's a draw!")
        }
        if (compMove === "screen" && playerMove === "paper") {
            cpuScore++;
            console.log(cpuScore, playerScore);
            console.log("CPU picked " + compMove + ", you lost!")
        }
        if (compMove === "scissor" && playerMove === "rock") {
            playerScore++;
            console.log(cpuScore, playerScore);
            console.log("CPU picked " + compMove + ", you won!")
        }

        if (playerScore === 3) {
            console.log("You beat the CPU: " + playerScore + " to " + cpuScore);
            cpuScore = 0;  //reset player scores once theres a winner
            playerScore = 0;
        }
        
        if(cpuScore === 3) {
            console.log("You lost to the CPU: " + cpuScore + " to " + playerScore);
            cpuScore = 0;
            playerScore = 0;
        }
}
/*
- Didn't need a while loop whereas for the first iteration i did
- for some reason return didnt work to announce winner, instead I used console log and manually reset the points
*/

//console.log(cpuScore, playerScore);

