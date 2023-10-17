// // make the first category button clickable to another pg.
// design principles menu button
let designPrinciplesButton = document.querySelector(
  ".open-level-button design-principles-button"
);
designPrinciplesButton?.addEventListener("click", function () {
  window.location = "design-principles.html";
});
// color theory menu button
let colorTheoryButton = document.querySelector(".color-theory-button");
colorTheoryButton?.addEventListener("click", function () {
  window.location = "color-theory.html";
});

// typesetting menu button
let typesettingButton = document.querySelector(".color-theory-button");
typesettingButton?.addEventListener("click", function () {
  window.location = "typesetting.html";
});

let designGameBody = document.querySelector(".game-body");
designGameBody?.addEventListener("load", () => {
  console.log("loaded");
});
let score = 0;
let robotScoreElement = document.getElementById("robot-score-class");
let playerScoreElement = document.getElementById("player-score-class");

function updateScores() {
  robotScoreElement.textContent = String(score).padStart(5, "0"); // changed the minus sign to an equals sign! It works
  playerScoreElement.textContent = String(score).padStart(5, "0");
}
function resetGame() {
  score = 0;
  updateScores();
}

let resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", () => {
  resetGame();
});
function resetButtonClick() {
  score = 0;
  updateScores();
}
