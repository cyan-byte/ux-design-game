// make the first category button clickable to another pg.
let designPrinciplesButton = document.querySelector(".design-principles-button");
designPrinciplesButton.addEventListener("click", function () {
  window.location = "design-principles.html";
});

questionElement.textContent = currentQuiz.questions[questionIndex];




const quizzes = {
  designPrinciples: {
    images: [
      "image1.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png"
    ],
    questions: ["What design principle is MOST represented in the word \"ELIFE\"?", "Question 2", "Question 3", "Question 4", "Quesition 5"],
    options: [
      ["Option 1a", "Option 2a", "Option 3a", "Option 4a"],
      ["Option 1b", "Option 2b", "Option 3b", "Option 4b"],
      ["Option 1c", "Option 2c", "Option 3c", "Option 4c"],
      ["Option 1d", "Option 2d", "Option 3d", "Option 4d"],
      ["Option 1e", "Option 2e", "Option 3e", "Option 4e"]
    ]
  },
  colorTheory: {
    images: [
      "image1.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png"
    ],
    questions: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"],
    options: [
      ["Option 1a", "Option 2a", "Option 3a", "Option 4a"],
      ["Option 1b", "Option 2b", "Option 3b", "Option 4b"],
      ["Option 1c", "Option 2c", "Option 3c", "Option 4c"],
      ["Option 1d", "Option 2d", "Option 3d", "Option 4d"],
      ["Option 1e", "Option 2e", "Option 3e", "Option 4e"]
    ]
  },
  typesetting: {
    images: [
      "image1.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png"
    ],
    questions: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"],
    options: [
      ["Option 1a", "Option 2a", "Option 3a", "Option 4a"],
      ["Option 1b", "Option 2b", "Option 3b", "Option 4b"],
      ["Option 1c", "Option 2c", "Option 3c", "Option 4c"],
      ["Option 1d", "Option 2d", "Option 3d", "Option 4d"],
      ["Option 1e", "Option 2e", "Option 3e", "Option 4e"]
    ]
  },
  uiUxChecklist: {
    images: [
      "image1.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png"
    ],
    questions: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"],
    options: [
      ["Option 1a", "Option 2a", "Option 3a", "Option 4a"],
      ["Option 1b", "Option 2b", "Option 3b", "Option 4b"],
      ["Option 1c", "Option 2c", "Option 3c", "Option 4c"],
      ["Option 1d", "Option 2d", "Option 3d", "Option 4d"],
      ["Option 1e", "Option 2e", "Option 3e", "Option 4e"]
    ]
  },
}

function loadQuestion(questionIndex) {
  questionElement.textContent = currentQuiz.questions[questionIndex];
  // Load image dynamically
  const imageElement = document.createElement("img");
  imageElement.src = currentQuiz.images[questionIndex];
  questionElement.appendChild(imageElement);

  currentQuiz.options[questionIndex].forEach((option, index) => {
    answerButtons[index].textContent = option;
    answerButtons[index].addEventListener("click", () => checkAnswer(option, questionIndex));
  });
}
