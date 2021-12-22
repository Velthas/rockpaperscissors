const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const lizard = document.querySelector(".lizard");
const spock = document.querySelector(".spock");

function computerPlay() {
    let generateNumber = (Math.floor(Math.random() * 5)) + 1;
    switch (generateNumber) {
        case 1:
            return "ROCK";

        case 2:
            return "PAPER";

        case 3: 
            return "SCISSORS"; 
        
        case 4: 
            return "LIZARD";
        
        case 5:
            return "SPOCK";
    }
}

rock.addEventListener('click', () => playRound("ROCK", computerPlay()));
paper.addEventListener('click', () => playRound("PAPER", computerPlay()));
scissors.addEventListener('click', () => playRound("SCISSORS", computerPlay()));
spock.addEventListener('click', () => playRound("SPOCK", computerPlay()));
lizard.addEventListener('click', () => playRound("LIZARD", computerPlay()));

const scoreDiv = document.querySelector('#score');
const results = document.createElement('div');

function playRound(playerSelection, computerSelection) {
    console.log(computerSelection)
    scoreDiv.appendChild(results);
    results.classList.add("comment");
    
    //Check for a winner or a loser based on comparing the two selections.
    if  (playerSelection === "ROCK" && computerSelection === "SCISSORS" || playerSelection === "PAPER" && computerSelection === "ROCK" ||  playerSelection === "SCISSORS" && computerSelection === "PAPER" || playerSelection === "ROCK" && computerSelection === "LIZARD" || playerSelection === "LIZARD" && computerSelection === "SPOCK" || playerSelection === "SPOCK" &&computerSelection === "SCISSORS" || playerSelection === "PAPER" && computerSelection === "SPOCK" || playerSelection === "SCISSORS" && computerSelection === "LIZARD" || playerSelection === "SPOCK" && computerSelection === "ROCK" || playerSelection === "LIZARD" && computerSelection === "PAPER") {
        results.textContent = `One point\n for humanity!\nThe computer really didn't see ${playerSelection} coming!`
    }
    //If the computer's choice and the player's are the same, then it's a tie
    else if (playerSelection === computerSelection) {

        results.textContent = "It's a tie! Get back at it!"
    }
    //In all other cases, we lost
    else {
        results.textContent = `The machines have won this round, keep going!` 
    }

}

