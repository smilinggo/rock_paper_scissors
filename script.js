function game(){
//Array used to hold possible choices
const choices = ['rock', 'paper', 'scissors'];

//used for While loop to validate user input is in the choices array
keepGoing = true

//Initialize userPlay variable to be used in while loop
let userPlay = ""

//console.log(example);

// Logic to have computer select rock/paper/scissors
const computerPlay = choices[Math.floor(Math.random() * choices.length)];


//Logic to have user select rock/paper/scissors and validate response
while (keepGoing) {
    const userPlayDefault = prompt("Select rock, paper, or scissors: ");
    userPlay = userPlayDefault.toLocaleLowerCase();
    if (choices.indexOf(userPlay) == -1) {
        alert("Bad input, please select rock, paper, or scissors: ");
    } else {
        keepGoing = false;  
    }
}

//Logic to have function to compare and log winner
if (computerPlay === 'rock' && userPlay === 'scissors' || computerPlay === 'paper' && userPlay === 'rock' || computerPlay === 'scissors' && userPlay === 'paper'){
    console.log(`You lose, ${computerPlay} beats ${userPlay}`);
    
}
else if (computerPlay === userPlay) {
    console.log(`It was tie, you both had ${computerPlay}`)
}
else {
    console.log(`You win, ${userPlay} beats ${computerPlay}`)
}
}

game();
game();
game();
game();
game();
