let choice = ['rock','paper', 'scissors']
function computerPlay(){
  let randomNumber = Math.floor(Math.random()*3)
  return choice[randomNumber]
}

let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let result = " "
let resultTag = document.getElementById('result')

function playRound(playerSelection, computerSelection) {
  let a = playerSelection.toLowerCase()
  let b = computerSelection.toLowerCase()



  if ((a == 'rock' && b == 'scissors') ||
        (a == 'scissors' && b == 'paper') ||
        (a == 'paper' && b == 'rock')) {
        
      return(`You won! ${a} beats ${b}`)}
    else if(a == b){
      return("It is a tie")
    } else{
            return(`Computer won! ${b} beats ${a}`)

    }

  }

result = playRound(playerSelection, computerSelection)
resultTag.innerHTML = result;
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));

