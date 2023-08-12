// // make the first category button clickable to another pg.
// design principles menu button
let designPrinciplesButton = document.querySelector(
  ".open-level-button design-principles-button"
);
designPrinciplesButton?.addEventListener("click", function () {
  window.location = "/html/design-principles.html";
});
// color theory menu button
let colorTheoryButton = document.querySelector(".color-theory-button");
colorTheoryButton?.addEventListener("click", function () {
  window.location = "/html/color-theory.html";
});

// typesetting menu button
let typesettingButton = document.querySelector(".color-theory-button");
typesettingButton?.addEventListener("click", function () {
  window.location = "/html/typesetting.html";
});

// Usability Heuristics menu button
let usabilityHeuristicsButton = document.querySelector(
  ".usability-heuristics-button"
);
usabilityHeuristicsButton?.addEventListener("click", function () {
  window.location = "/html/usability-heuristics.html";
});

let designGameBody = document.querySelector(".game-body");
designGameBody?.addEventListener("load", () => {
  console.log("loaded");
});
