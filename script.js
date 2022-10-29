const choices = ['rock' , 'paper' , 'scissors'] ;
let playerSelection = 0;
const computerSelection = getCoumputerChoice();
function getCoumputerChoice() 
    { 
        let num = Math.floor(Math.random()*choices.length);
        return choices[num];

    }

function playRound() 
    {
       let playerInput = prompt("Choose Rock, Paper, Scissors!");
       playerSelection = playerInput.toLowerCase();
        
        if (playerSelection == 'rock' && computerSelection == 'paper') { 
            return "You Win! Rock beats Paper!"; 
         }
            else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
                return "You Lose! Scissors beats Rock!";
         }
            else if (playerSelection == 'rock' && computerSelection == 'rock'){
                return "It's a Draw!";
         }
             else if (playerSelection == 'paper' && computerSelection == 'paper'){
                return "It's a Draw!";
         }
            else if (playerSelection == 'paper' && computerSelection == 'rock'){
                return "You Win! Paper beats Rock!";
         }
            else if (playerSelection == 'paper' && computerSelection == 'scissors'){
                return "You Lose! Scissors beats Paper";
         }
            else if (playerSelection == 'scissors' && computerSelection == 'paper'){
                return "You Win! Scissors beats Paper";
         }
            else if (playerSelection == 'scissors' && computerSelection == 'rock'){
                return "You Lose! Rock beats Scissors!";
         }
            else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
                return "It's a Draw!";
        }
    }
    
    
    console.log(playRound(playerSelection, computerSelection));
    console.log('Computer Has chosen ' + computerSelection);

    
    