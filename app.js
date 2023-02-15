let restartBtn = document.getElementById("reset-btn");
let spaces = Array.from(document.querySelectorAll(".space"));
let result = document.querySelector(".result");
let blanks = Array(9).fill(null);
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
const winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const startGame = () => {
  spaces.forEach((space) => space.addEventListener("click", boxClicked));
};

function boxClicked(e) {
  const id = e.target.dataset.num;
  if (!blanks[id]) {
    blanks[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    // Player won condition
    if (playerHasWon() !== false) {
      result.innerText = `${currentPlayer} Won!`;
    }

    currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
  }
}

function playerHasWon() {
  for (const condition of winningCombo) {
    let [a, b, c] = condition;

    if (blanks[a] && blanks[a] == blanks[b] && blanks[a] == blanks[c]) {
      return [a, b, c];
    }
  }
  return false;
}

restartBtn.addEventListener("click", restart);

function restart() {
  blanks.fill(null);

  spaces.forEach((space) => {
    space.innerText = "";
  });

  result.innerText = "";

  currentPlayer = X_TEXT;
}

startGame();
