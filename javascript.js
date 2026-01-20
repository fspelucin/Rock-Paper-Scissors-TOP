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

function playRound(humanScore,computerScore){
  //Get humanChoice and computerChoice
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  let winner;
  //List of conditionals, to get the winner.
  if (humanChoice==computerChoice){
    console.log("This round is a DRAW!!!");
    return
  }
  else {
    if ((humanChoice=="rock")&&(computerChoice=="papper")){
      winner = "Human";
      humanScore = humanScore ++;
    }
    if((humanChoice=="papper")&&(computerChoice=="rock")){
      winner = "Human";
      humanScore = humanScore ++;
    }
    if ((humanChoice=="scissors")&&(computerChoice=="papper")){
      winner = "Human" 
      humanScore = humanScore ++;
    }
    else {
      winner = "Computer"
      computerScore = computerScore ++;
    }
  }
  //Console.log the winner of the round
  console.log(`Human chose ${humanChoice}, Computer chose ${computerChoice}. The winner is ${winner}`);
  //Return humanScore and computerScore
  if (winner == "Human"){
    return humanScore
  } 
  else{
    return computerScore
  }
}

function playgame(){
  //Create score variable
  let humanScore = 0;
  let computerScore = 0;
  //forloop 5 times 
  for (let i = 0; i < 5; i++) {
    playRound(humanScore, computerScore);
  }
  //console log winner of the game
  if (humanScore==computerScore){
    console.log ("This game was a DRAW!!!");
  }
  else{
    if(humanScore > computerScore){
      console.log("The winner of this game is the HUMAN");
    } 
    else {
      console.log("The winner of this game was the COMPUTER");      
    }
  }

playgame(); 
