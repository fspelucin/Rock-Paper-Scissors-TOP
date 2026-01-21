function getComputerChoice(){
  //Get a random number from 1 to 3
  let computerChoice; 
  let randomNumber = Math.floor(Math.random() * 3);
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

function playRound(){
  //Get humanChoice and computerChoice
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  let winner = "Draw";
  //List of conditionals, to get the winner.
  if (humanChoice  === computerChoice){
    console.log(`Human chose ${humanChoice}, Computer chose ${computerChoice}. This round is a DRAW!!!`);
  }
  else {
    if ((humanChoice === "rock")&&(computerChoice === "scissors")){
      winner = "Human";
      console.log(`Human chose ${humanChoice}, Computer chose ${computerChoice}. The winner is ${winner}`);
      return winner
    }
    if((humanChoice === "papper")&&(computerChoice === "rock")){
      winner = "Human";
      console.log(`Human chose ${humanChoice}, Computer chose ${computerChoice}. The winner is ${winner}`);
      return winner
    }
    if ((humanChoice === "scissors")&&(computerChoice === "papper")){
      winner = "Human";
      console.log(`Human chose ${humanChoice}, Computer chose ${computerChoice}. The winner is ${winner}`);
      return winner
    }
   else {
      winner = "Computer";
      console.log(`Human chose ${humanChoice}, Computer chose ${computerChoice}. The winner is ${winner}`);
      return winner
    }
  }
}

function playgame(){
  //Create score variable
  let humanScore = 0;
  let computerScore = 0;
  let winner;
  //forloop 5 times 
  for (let i = 0; i < 5; i++) {
    winner = playRound();
    if (winner === "Human"){
      humanScore++;
    }
    if (winner === "Computer"){
      computerScore++;
    }
  }
  //console log winner of the game
  if (humanScore==computerScore){
    console.log ("This game was a DRAW!!!");
    return
  }
  else{
    if(humanScore > computerScore){
      console.log("The winner of this game is the HUMAN");
      return
    } 
    else {
      console.log("The winner of this game was the COMPUTER");      
      return
    }
  }
}

playgame(); 
