const SCISSOR = "scissors",
  PAPER = "paper",
  ROCK = "rock";

const options = document.querySelector(".game-options");
const message = document.querySelector(".message");
const playerOneImg = document.querySelector(".player-1-choice img");
const playerTwoImg = document.querySelector(".player-2-choice img");

let playerOneMove = (playerTwoMove = "");

function getRandomMove() {
  return moves[Math.floor(Math.random() * moves.length)];
}


options.addEventListener("click",(event)=>{
  

if( !! event.target.getAttribute("src")){
  playerOneMove = event.target.getAttribute("data-id")
  playerTwoMove = getRandomMove()
 
  playerOneImg.src=`./${playerOneMove}.png`
  playerOneImg.classList.remove("animate-1")


  playerTwoImg.src=`./${playerTwoMove}.png`
  playerTwoImg.classList.remove("animate-2")

  checkWinner()
}

})

const moves = ["scissors", "paper", "rock"];
function checkWinner() {
  if (playerOneMove === playerTwoMove) {
    return message.textContent = "Draw !!";
  }

  if (
    (playerOneMove === SCISSOR && playerTwoMove === PAPER) ||
    (playerOneMove === PAPER && playerTwoMove === ROCK) ||
    (playerOneMove === ROCK && playerTwoMove === SCISSOR)
  ) {
    return message.textContent = "Player 1 Wins !!";
  }

  return message.textContent = "Player 2 Wins !!";
}