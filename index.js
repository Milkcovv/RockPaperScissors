let choice = ['rock','paper', 'scissors']
let computerScore = 0;
let humanScore = 0;
function computerPlay(){
  let randomNumber = Math.floor(Math.random()*3)
  return choice[randomNumber]
}


function playRound(playerSelection, computerSelection) {
  let a = playerSelection.toLowerCase()
  let b = computerSelection.toLowerCase()
  if ((a == 'rock' && b == 'scissors') ||
        (a == 'scissors' && b == 'paper') ||
        (a == 'paper' && b == 'rock')) 
      {
      humanScore++;
      return(`You won! ${a} beats ${b}`)
        }
    else if(a == b){
      return("It is a tie")
    } else{
       computerScore++;
            return(`Computer won! ${b} beats ${a}`)
           

    }

  }

function gameRound(){
  let count = 0;
  while (count < 5) {
    const playerSelection = prompt('make a choice')
    const computerSelection = computerPlay();
    console.log(`computer chose ${computerSelection}`)
    console.log(playRound(playerSelection, computerSelection));
    count++;
  }
  console.log(`computer won ${computerScore} games`)
  console.log(`human won ${humanScore} games`)
  console.log(` ${Math.abs(humanScore + computerScore -5)} tie games`)

  humanScore > computerScore ? console.log(`You won ${humanScore} games`): console.log(`Computer won ${computerScore} games`)

  
}

gameRound()
