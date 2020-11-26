function computerPlay(){
    var array = ["Rock", "Paper", "Scissors"];
    return array[Math.floor(Math.random()*array.length)];

}

var playerScore = 0;
var computerScore = 0;

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection != computerSelection){
        if(playerSelection == "rock"){
            if(computerSelection == "paper"){
                computerScore = computerScore + 1;
                return "You lose ! Paper beats Rock";
            } else if(computerSelection == "scissors"){
                playerScore = playerScore + 1;
                return "You win ! Rock beats Scissors";
            } 
        }
        if(playerSelection == "paper"){
            if(computerSelection == "rock"){
                playerScore = playerScore + 1;
                return "You win ! Paper beats Rock";
            } else if(computerSelection == "scissors"){
                computerScore = computerScore + 1;
                return "You lose ! Scissors beats Paper";
            } 
        }
        if(playerSelection == "scissors"){
            if(computerSelection == "paper"){
                playerScore = playerScore + 1;
                return "You win ! Scissors beats Paper";
            } else if(computerSelection == "rock"){
                computerScore = computerScore + 1;
                return "You lose ! Rock beats Scissors";
            } 
        }
    
    }else{
        console.log("Draw, Redo round")
        console.log(playRound(playerSelection, computerPlay()));
    } 
}

function game(){
    for(var i = 0; i < 5; i++){
        const playerSelection = prompt("Choose between Rock, Paper or Scissors");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("computer Score : " + computerScore);
    console.log("player Score : " + playerScore);  
    return playerScore > computerScore ? "Winner : Player" : "Winner : Computer"
         
}



