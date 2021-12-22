# Rock Paper Scissors Lizard Spock

Initially a simple game of Rock Paper Scissors made to be played at the console. It is now updated with a graphical user interface and a few extra picks as seen in Sam Kass' own variant of the game, which adds two items to the list: lizard and spock. This project was done to practice event listeners and to some extent dom manipulation.

## The game

The game is an expansion on the game Rock, Paper, Scissors. Each player picks a variable and reveals it at the same time. The winner is the one who wins five rounds in a row. In a tie, the process is repeated until a total of five rounds have been won by one of the two parties.

<p align="center"> <img src="https://static.wikia.nocookie.net/bigbangtheory/images/7/7d/RPSLS.png/revision/latest/scale-to-width-down/180?cb=20120822205915"
     alt="RockPaperScissorsLizardSpock rules"> </p>

As recited by Sheldon, here are the winning pairs:

Scissors cuts Paper <br>
Paper covers Rock <br>
Rock crushes Lizard <br>
Lizard poisons Spock <br>
Spock smashes Scissors <br>
Scissors decapitates Lizard <br>
Lizard eats Paper <br>
Paper disproves Spock <br>
Spock vaporizes Rock <br>
(and as it always has) Rock crushes Scissors <br>

## Functionality

 <p>On the main page, the user can click on the image corresponding to the item of their choice. The computer will make a random choice, and the two will be compared to determine a winner. The score will then be updated in real time, with a commentary of what is happening being provided through the result div.</p>
 <p>By default, the player will be assigned the color yellow, and the computer the color lime.</p>
 <p>Once a score of five has been reached, the result paragraph will declare a winner. If the user attempts to pick an item after a game has been completed, a new one will automatically start, and the score be reset.</p>

## Design Structure

<p>This is a front end project designed using HTML, CSS and JavaScript. Font utilized for the header is **Lobster**, found on google fonts. The file structure is as follows:</p>

+ **index.html**: this is the only html page in this project, containing all of the functionality of this project. It was put together using various display properties including the incredible flexible box model. 
+ **style.css**: contains all of the necessary style rules to run the website. Since this was a practice exercise, I tried experimenting with box-shadow and transitions to make the page more appealing visually. Might go back and alter a thing or two later down the line.
+ **script.js**: the most involved part of the project was the script. Since this game was initially made to run on a terminal, I had to refactor some old code for the first time, salvaging what I could but altering or even deleting entire functions I had coded beforehand. This was great experience, and it allowed me to put what I've been learning about DOM manipulation and Event Listeners into perspective.

## Icons
<p>
All five of the icons displayed on the site were borrowed for free from Flaticon.com and all credits for it belong to the following artists: </p>
+ Rock: Icongeek26
+ Paper, Scissors, Lizard, Vulcan: Freepik
