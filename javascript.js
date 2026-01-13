let humanScore = 0;
let computerScore = 0; 

function getComputerChoice(){
  //Get a random number from 1 to 3
  let computerChoice; 
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber)
  if (randomNumber == 0) {
    computerChoice = "rock"}
  else{
    if(randomNumber == 1) {
      computerChoice = "papper"
    }
    else {
      computerChoice = "scissors"
    }
  }
  return computerChoice
}

let computerChoice = getComputerChoice();

function getHumanChoice(){
  //Declare HumanChoice variable
  let HumanChoice; 
  //Use prompt method to get usser input
  let input = prompt("rock, papper or scissors?");
  //Make usser input case insensitive
  //Attach usser imput to getHumanChoice value
  HumanChoice = input.toLowerCase();
  //Return humanChoice value
  return HumanChoice
}

//function playRound(humanChoice,computerChoice){
  //List of conditionals, to get the winner.
  //Console.log the winner of the round
//}

//function playgame(){
  //Create points variable
  //forloop 5 times 
  //gethuman and computer choice and attach it to variable
  //platround
  //modify points
  //console log winner of the game
//}
console.log(computerChoice)
