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
