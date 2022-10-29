const choices = ['rock' , 'paper' , 'scissors'] ;
let playerSelection = 0;
let playerScore = 0;
let computerScore = 0;
let draw = 0;

function getCoumputerChoice() 
    { 
        let num = Math.floor(Math.random()*choices.length);
        return choices[num];
       // computer random rock paper scissors generator
    }


function playRound()  //  playing a round
    {
       let playerInput = prompt("Choose Rock, Paper, Scissors!");
       playerSelection = playerInput.toLowerCase(); 
       let computerSelection = getCoumputerChoice();
       if (playerSelection == 'rock' && computerSelection == 'paper') { 
            playerScore++;
            return "You Win! Rock beats Paper!"; 
         }
            else if (playerSelection == 'rock' && computerSelection == 'scissors'){
                computerScore++;
                return "You Lose! Scissors beats Rock!";
         }
            else if (playerSelection == 'rock' && computerSelection == 'rock'){
                draw++;
                return "It's a Draw!";
         }
             else if (playerSelection == 'paper' && computerSelection == 'paper'){
                draw++;
                return "It's a Draw!";
         }
            else if (playerSelection == 'paper' && computerSelection == 'rock'){
                playerScore++;
                return "You Win! Paper beats Rock!";
         }
            else if (playerSelection == 'paper' && computerSelection == 'scissors'){
                computerScore++;
                return "You Lose! Scissors beats Paper!";
         }
            else if (playerSelection == 'scissors' && computerSelection == 'paper'){
                playerScore++;
                return "You Win! Scissors beats Paper!";
         }
            else if (playerSelection == 'scissors' && computerSelection == 'rock'){
                computerScore++; 
                return "You Lose! Rock beats Scissors!";
         }
            else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
                draw++;
                return "It's a Draw!";
            }
            else {
                alert("Something went wrong!");
            }    
        }
    
   
 function game() {
    for(i=0;i<5;i++) {
        playRound();
 
        console.log("You " + playerScore + " - " + computerScore + " Computer ; " + draw + " draws");
    }
 }
 game();  
if (playerScore > computerScore) {
    console.log("You have won the game with " + playerScore + " - " + computerScore + "!");
}    
    else if (playerScore < computerScore){
    console.log("You have lost the game with " + playerScore + " - " + computerScore + "!");
    }
    else console.log("It was Draw " + playerScore + " - " + computerScore + "!");




    
    