let question = document.querySelector(".level-question");
let options = [...document.querySelectorAll(".option")]; // makes a copy of this selection and the [] turn it to an array
let questionImage = document.querySelector(".question-image");
console.log(options);
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let robotScoreElement = document.querySelector(".robot-score-class");
let playerScoreElement = document.querySelector(".player-score-class");

let questions = [
  {
    question:
      "Which color scheme consists of three colors that are equidistant from each other on the color wheel?",
    image: "/images/colorTheoryImage1.png",
    option1: "Monochromatic",
    option2: "Analogous",
    option3: "Complementary",
    option4: "Triadic",
    answer: 4,
  },
  {
    question:
      'What does the color "blue" typically symbolize in color psychology?',
    image: "/images/colorTheoryImage2.png",
    option1: "Joy",
    option2: "Sadness",
    option3: "Anger",
    option4: "Energy",
    answer: 2,
  },
  {
    question:
      "What is the term for a color created by mixing two primary colors in equal proportions?",
    image: "/images/colorTheoryImage3.png",
    option1: "Secondary Color",
    option2: "Tertiary Color",
    option3: "Complementary Color",
    option4: "Intermediate Color",
    answer: 1,
  },
  {
    question:
      "Which color harmony is created by choosing colors that are next to each other on the color wheel?",
    image: "/images/colorTheoryImage4.png",
    option1: "Split-complementary",
    option2: "Monochromatic",
    option3: "Analogous",
    option4: "Tetradic",
    answer: 3,
  },
  {
    question:
      "Which color scheme uses shades, tints, and tones of a single color?",
    image: "/images/colorTheoryImage5.png",
    option1: "Complementary",
    option2: "Monochromatic",
    option3: "Triadic",
    option4: "Tertiary",
    answer: 2,
  },
];


const correctAnswerPoints = 10; // points per correct answer
const maxQuestions = 5;

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions]; // gets a full COPY of all the questions from the questions array into availableQuestions
  // console.log(availableQuestions);
  getNewQuestion();
}
function getNewQuestion() {
  if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    return window.location.assign("/html/index.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  questionImage.src = currentQuestion.image; // should load image dynamically

  options.forEach((option) => {
    const number = option.dataset["number"];
    option.innerText = currentQuestion["option" + number];
  });

  availableQuestions.splice(questionIndex, 1);
}

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    const selectedOption = e.target;
    const selectedAnswer = selectedOption.dataset["number"];
    console.log(Number(selectedAnswer), currentQuestion.answer);
    console.log(currentQuestion);
    if (Number(selectedAnswer) === currentQuestion.answer) {
      score += correctAnswerPoints;
      updateScores();
      alert("Correct!");
      getNewQuestion();
    } else {
      score -= correctAnswerPoints;
      alert("NOT Correct");
      wrongAnswers++;
      if (wrongAnswers > 2) {
        alert("You got MORE THAN 2 questions wrong. Game over.");
        resetAndGoHome();
      }
    }
    // else {
    //   // score -= correctAnswerPoints;
    //   updateScores();
    // }

    if (Number(selectedAnswer) !== currentQuestion.answer) {
      return updateScores();
    }
  });
});

function updateScores() {
  robotScoreElement.textContent = String(score).padStart(5, "0"); // changed the minus sign to an equals sign! It works
  playerScoreElement.textContent = String(score).padStart(5, "0");
}

function nextButtonClick() {
  let nextButton = document.querySelector(".next-button");
  nextButton.addEventListener("click", getNewQuestion);
}
nextButtonClick();

function resetAndGoHome() {
  resetGame();
  questionCounter = 0;
  availableQuestions = [...questions];
  wrongAnswers = 0;
  window.location.assign("/html/index.html");
}

function resetGame() {
  score = 0;
  updateScores();
}

startGame();

// add this in a condition to reset and restart the game: windows.location.reload()
