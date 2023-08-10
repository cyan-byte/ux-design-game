const quizzes = [
  {
    title: "design principles",
    images: [
      "/images/design-p-1.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png",
    ],
    questions: [
      'What design principle is MOST represented in the word "ELIFE"?',
      "Which option has the best contrast?",
      "What does this represent the MOST?",
      'What principle allows a layout to have "breathing room"?',
      "When a font is bolded, what principle is being used?",
    ],
    options: [
      ["Alignment", "Hue", "Hierarchy", "Proximity"],
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

// loads the first question image to design principles page
let questionImage = document.querySelector("#question-image");
let levelQuestion = document.querySelector(".level-question");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");

let currentQuestionIndex = 0;

window.addEventListener("load", function () {
  console.log(questionImage);
  console.log(quizzes[0].images[0]);
  questionImage.src = `${quizzes[0].images[0]}`;
});

function loadQuestion() {
    levelQuestion.textContent = quizzes[1].questions[0];
    
};
