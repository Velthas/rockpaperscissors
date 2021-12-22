//Fetch the nodes to display the score to:
const playerScoreDiv = document.querySelector(".player");
const computerScoreDiv = document.querySelector(".computer");


//Create variables to store the score
let playerScore = 0;
let computerScore = 0;

//Get the nodes to apply event listeners to
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const lizard = document.querySelector(".lizard");
const spock = document.querySelector(".spock");

//Pass the information about player move to the playRound function. 
//Computer move is generated dinamically using computerPlay.
rock.addEventListener('click', () => playRound("ROCK", computerPlay()));
paper.addEventListener('click', () => playRound("PAPER", computerPlay()));
scissors.addEventListener('click', () => playRound("SCISSORS", computerPlay()));
spock.addEventListener('click', () => playRound("SPOCK", computerPlay()));
lizard.addEventListener('click', () => playRound("LIZARD", computerPlay()));

//Create the div to display the results and fetch the parent node scoreDiv to append it to
const scoreDiv = document.querySelector('#score');
const results = document.createElement('div');


//Randomly generate a number and extract a move from the result
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

//Plays a rpsls round based on user input and randomly generated computer input.
function playRound(playerSelection, computerSelection) {

    //Use descendant selectors to fetch the image and highlight it with color to show player and computer choice
    let playerItemClass = `.${playerSelection.toLowerCase()} img`;
    let computerItemClass = `.${computerSelection.toLowerCase()} img`;
    highlightChoices(playerItemClass, computerItemClass);


    //Add the comment section under the scoreboard
    scoreDiv.appendChild(results);
    results.classList.add("comment");
    
    //Check for a winner or a loser based on comparing the two selections.
    if  (playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
     playerSelection === "PAPER" && computerSelection === "ROCK" ||
       playerSelection === "SCISSORS" && computerSelection === "PAPER" ||
        playerSelection === "ROCK" && computerSelection === "LIZARD" ||
         playerSelection === "LIZARD" && computerSelection === "SPOCK" ||
          playerSelection === "SPOCK" &&computerSelection === "SCISSORS" ||
           playerSelection === "PAPER" && computerSelection === "SPOCK" ||
            playerSelection === "SCISSORS" && computerSelection === "LIZARD" ||
             playerSelection === "SPOCK" && computerSelection === "ROCK" ||
              playerSelection === "LIZARD" && computerSelection === "PAPER") {

        results.textContent = `One point\n for humanity!\nThe computer really didn't see ${playerSelection.toLowerCase()} coming!`;
        //Increase the player's score and update the text-content
        playerScore += 1
        playerScoreDiv.textContent = playerScore;


    }

    //If the computer's choice and the player's are the same, then it's a tie
    else if (playerSelection === computerSelection) {

        results.textContent = "It's a tie! Get back at it!"
    }

    //In all other cases, we lost
    else {

        results.textContent = `The machines have won this round, keep going!` 
        computerScore += 1;
        computerScoreDiv.textContent = playerScore;
    }

}

function highlightChoices(playerItemClass, computerItemClass) {

    //See if there's already a highlight going on
    const playerImg = document.querySelector('.human');
    const computerImg = document.querySelector('.machine');
    const humanMachineTie = document.querySelector('.hmtie')

    //If so, remove it
    if (playerImg) {
        playerImg.classList.remove('human');
        computerImg.classList.remove('machine');
    }
    else if (humanMachineTie) {
        humanMachineTie.classList.remove('hmtie');
    }
    

    const playerItem = document.querySelector(playerItemClass);
    const computerItem = document.querySelector(computerItemClass);

    //In the event of a tie, apply a tie class to the shared item.
    if (playerItemClass === computerItemClass) {
        playerItem.classList.add('hmtie');
    }
    else {
    playerItem.classList.add('human');
    computerItem.classList.add('machine');
    }
}
