let gameResult = ""
let userPlay = ""
let intUserScore = 0
let intComputerScore = 0
let intTieScore = 0

const rockButton = document.createElement("button");
rockButton.innerHTML = "Rock";

const paperButton = document.createElement("button");
paperButton.innerHTML = "Paper";

const scissorsButton = document.createElement("button");
scissorsButton.innerHTML = "Scissors";

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);

let userScore = document.createElement("p");


let computerScore = document.createElement("p");


let tieScore = document.createElement("p");



document.body.appendChild(userScore);
document.body.appendChild(computerScore);
document.body.appendChild(tieScore);




const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', event => {
        document.getElementById("result_id").remove();
        userPlay = btn.innerHTML.toLowerCase();
        game(userPlay)
    })
})

function generateText(gameResult) {
    
    const resultWindow = document.createElement('p');
    resultWindow.id = "result_id"
    const resultText = document.createTextNode(gameResult)
    resultWindow.appendChild(resultText);
    console.log(resultText)
    document.body.appendChild(resultWindow);
}

function updateScore(winner) {
    if (intComputerScore < 5 && intUserScore < 5) {
        if (winner == "User") {
            intUserScore += 1;
            userScore.innerHTML = `You have won ${intUserScore} times. `;
        }
        else if (winner == "Computer"){
            intComputerScore += 1;
            computerScore.innerHTML = `The computer has won ${intComputerScore} time`;
        }
        else if (winner == "Tie"){
            intTieScore += 1;
            tieScore.innerHTML = `You have tied ${intTieScore} times`;
        }
    }
}

function checkWinner(){
    if (intComputerScore > 4) {
        let announceWinner = document.createElement('h1');
        let announceText = document.createTextNode("You Lose!!");
        announceWinner.appendChild(announceText);
        console.log(announceText)
        document.body.appendChild(announceWinner);
    }
    else if (intUserScore > 4) {
        let announceWinner = document.createElement('h1');
        let announceText = document.createTextNode("You Win!!");
        announceWinner.appendChild(announceText);
        console.log(announceText)
        document.body.appendChild(announceWinner);
    }
}


generateText(gameResult);

//Array used to hold possible choices
const choices = ['rock', 'paper', 'scissors'];

// Logic to have computer select rock/paper/scissors


//Logic to have function to compare and log winner
function game(userPlay) {
    const computerPlay = choices[Math.floor(Math.random() * choices.length)];
    
    if (computerPlay === 'rock' && userPlay === 'scissors' || computerPlay === 'paper' && userPlay === 'rock' || computerPlay === 'scissors' && userPlay === 'paper'){
        gameResult = (`You lose, ${computerPlay} beats ${userPlay}`);
        generateText(gameResult);
        let winner = "Computer";
        updateScore(winner);
        checkWinner();
    }
    else if (computerPlay === userPlay) {
        gameResult = (`It was tie, you both had ${computerPlay}`)
        generateText(gameResult);
        let winner = "Tie";
        updateScore(winner);
        checkWinner();
    }
    else {
        gameResult = (`You win, ${userPlay} beats ${computerPlay}`)
        generateText(gameResult);
        let winner = "User";
        updateScore(winner);
        checkWinner();
    }
}