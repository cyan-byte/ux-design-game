// // make the first category button clickable to another pg.
let designPrinciplesButton = document.querySelector(
  ".open-level-button design-principles-button"
);
designPrinciplesButton?.addEventListener("click", function () {
  window.location = "design-principles.html";
});

// questionElement.textContent = currentQuiz.questions[questionIndex];
let designGameBody = document.querySelector(".game-body");
designGameBody?.addEventListener("load", () => {
  console.log("loaded");
});

const quizzes = [
  {
    title: "design principles",
    images: [
      "image1.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png",
    ],
    questions: [
      'What design principle is MOST represented in the word "ELIFE"?',
      "Question 2",
      "Question 3",
      "Question 4",
      "Quesition 5",
    ],
    options: [
      ["Option 1a", "Option 2a", "Option 3a", "Option 4a"],
      ["Option 1b", "Option 2b", "Option 3b", "Option 4b"],
      ["Option 1c", "Option 2c", "Option 3c", "Option 4c"],
      ["Option 1d", "Option 2d", "Option 3d", "Option 4d"],
      ["Option 1e", "Option 2e", "Option 3e", "Option 4e"],
    ],
  },
  {
    title: "Color Theory",
    images: [
      "image1.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png",
    ],
    questions: [
      "Question 1",
      "Question 2",
      "Question 3",
      "Question 4",
      "Question 5",
    ],
    options: [
      ["Option 1a", "Option 2a", "Option 3a", "Option 4a"],
      ["Option 1b", "Option 2b", "Option 3b", "Option 4b"],
      ["Option 1c", "Option 2c", "Option 3c", "Option 4c"],
      ["Option 1d", "Option 2d", "Option 3d", "Option 4d"],
      ["Option 1e", "Option 2e", "Option 3e", "Option 4e"],
    ],
  },
  {
    title: "Typesetting",
    images: [
      "image1.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png",
    ],
    questions: [
      "Question 1",
      "Question 2",
      "Question 3",
      "Question 4",
      "Question 5",
    ],
    options: [
      ["Option 1a", "Option 2a", "Option 3a", "Option 4a"],
      ["Option 1b", "Option 2b", "Option 3b", "Option 4b"],
      ["Option 1c", "Option 2c", "Option 3c", "Option 4c"],
      ["Option 1d", "Option 2d", "Option 3d", "Option 4d"],
      ["Option 1e", "Option 2e", "Option 3e", "Option 4e"],
    ],
  },
  {
    title: "UI/UX Checklist",
    images: [
      "image1.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png",
    ],
    questions: [
      "Question 1",
      "Question 2",
      "Question 3",
      "Question 4",
      "Question 5",
    ],
    options: [
      ["Option 1a", "Option 2a", "Option 3a", "Option 4a"],
      ["Option 1b", "Option 2b", "Option 3b", "Option 4b"],
      ["Option 1c", "Option 2c", "Option 3c", "Option 4c"],
      ["Option 1d", "Option 2d", "Option 3d", "Option 4d"],
      ["Option 1e", "Option 2e", "Option 3e", "Option 4e"],
    ],
  },
];
