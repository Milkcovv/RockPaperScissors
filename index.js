const choice = ['rock','paper', 'scissors']
let computerScore = 0;
let humanScore = 0;
let playerChoice = ''
let computerchoice = ''



const choiceBtn = document.querySelectorAll('button');
const resultTag = document.querySelector('h1');
const humanScoreTag = document.querySelector('#humanScore');
const computerScoreTAg = document.querySelector('#computerScore');


function computerPlay(){
  let randomNumber = Math.floor(Math.random()*3)
  return choice[randomNumber]
}



function playRound(playerChoice) {
  let a = playerChoice.target.id;
  let b = computerPlay();

  if(humanScore < 5 && computerScore <5)
  {
      if ((a == 'rock' && b == 'scissors') ||
        (a == 'scissors' && b == 'paper') ||
        (a == 'paper' && b == 'rock')) 
      {
      humanScore++;
      humanScoreTag.textContent = `Your Score: ${humanScore}`;
      resultTag.textContent = `You won! ${a} beats ${b}`
        }
    else if(a == b){
      resultTag.textContent ="It is a tie";
    } else{
       computerScore++;
       computerScoreTAg.textContent = `Computer Score: ${computerScore}`;
       resultTag.textContent =`Computer won! ${b} beats ${a}`;
    }
  }else{
    alert(`${Math.max(computerScore>humanScore)?"Computer Won!":"Human Won!"}`)
    computerScore = 0;
    humanScore = 0;
    computerScoreTAg.textContent = `Computer Score: ${computerScore}`;
    humanScoreTag.textContent = `Your Score: ${humanScore}`;
  }

    
  }


choiceBtn.forEach(btn=>{
  btn.addEventListener('click', playRound)
});













// function gameRound(){
//   let count = 0;
//     const computerSelection = computerPlay();
//     console.log(`computer chose ${computerSelection}`)
//     console.log(playRound(playerSelection, computerSelection));
//     count++;
//   }
//   console.log(`computer won ${computerScore} games`)
//   console.log(`human won ${humanScore} games`)
//   console.log(` ${Math.abs(humanScore + computerScore -5)} tie games`)

//   humanScore > computerScore ? console.log(`You won ${humanScore} games`): console.log(`Computer won ${computerScore} games`)

  
// }

