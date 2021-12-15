function computerPlay() {
    let generateNumber = (Math.floor(Math.random() * 3)) + 1;
    switch (generateNumber) {
        case 1:
            return "Rock";

        case 2:
            return "Paper";

        case 3: 
            return "Scissors";   
    }
}

function playRound(playerSelection, computerSelection) {
    let capChoice = playerSelection.toUpperCase();
    let capCompChoice = computerSelection.toUpperCase();
    
    //Check if the user is being naughty
    if (capChoice !== "ROCK" && capChoice !== "PAPER" && capChoice !== "SCISSORS") {
        return "Write rock, paper or scissors";
    }

    //Check for a winner or a loser based on comparing the two selections.
    if (capChoice === "ROCK" && computerSelection === "Scissors" || capChoice === "PAPER" && computerSelection === "Rock" ||  capChoice === "SCISSORS" && computerSelection === "Paper") {
        return "Player 1 is the winner!";
    }
    //If the computer's choice and the player's are the same, then it's a tie
    else if(capChoice === capCompChoice) {

        return "It's a tie for now";
    }
    //In all other cases, we lost
    else {
        return "The machines have won.";
    }

}

//This function simulates a game with five rounds in it.
function playGame () {
    //Loop through five times
    for (let i = 0; i < 5 ; i++) {
        //Ask for the player's move each time, then generate the computers and declare the winner.
        console.log(playRound(prompt("Give me your move"), computerPlay()));
    }

}