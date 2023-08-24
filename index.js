

const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "paper" && moveTwo === "rock")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }

  if (document.querySelectorAll("move__image")) {

    document.querySelectorAll(".move__img").forEach(item => item.remove());
  }
};

const playGame = () => {
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {

  const firstImage = document.createElement('img');
  const secondImage = document.createElement('img');
  const result = document.querySelector('h1');

  firstImage.setAttribute("src", `/images/${moveOne}.png`);
  firstImage.classList.add('move__img');
  const playOneBlock = document.getElementById('player-one-move');
  playOneBlock.append(firstImage);

  secondImage.setAttribute("src", `/images/${moveTwo}.png`);
  secondImage.classList.add('move__img');
  const playTwoBlock = document.getElementById('player-two-move');
  playTwoBlock.append(secondImage);


  result.textContent = `${outcome}`;



};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
