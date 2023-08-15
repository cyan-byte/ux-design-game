let question = document.querySelector(".level-question");
let options = [...document.querySelectorAll(".option")]; // makes a copy of this selection and the [] turn it to an array
let questionImage = document.querySelector(".question-image");
console.log(options);
let currentQuestion = {};
let playerScore = 0;
let computerScore = 0;
let questionCounter = 0;
let availableQuestions = [];
let wrongAnswers = 0;

let robotScoreElement = document.querySelector(".robot-score-class");
let playerScoreElement = document.querySelector(".player-score-class");

let questions = [
  {
    question:
      "What term describes a lone word or short group of words leftover from a previous paragraph? They appear at the bottom of a paragraph, column or page.",
    image: "/images/typesettingImage1.png",
    option1: "Widow",
    option2: "Hyphen",
    option3: "Orphan",
    option4: "Kerning",
    answer: 1,
  },
  {
    question:
      "Which typographic feature involves adjusting the space between pairs of letters to improve their visual harmony and legibility?",
    image: "/images/typesettingImage2.png",
    option1: "Leading",
    option2: "Ligature",
    option3: "Base",
    option4: "Kerning",
    answer: 4,
  },
  {
    question:
      "What is the term for a word or short line of text that appears alone at the top of a page or column, separated from the rest of the paragraph?",
    image: "/images/typesettingImage3.png",
    option1: "Widow",
    option2: "Hyphen",
    option3: "Orphan",
    option4: "Leading",
    answer: 3,
  },
  {
    question:
      "Which typesetting practice involves adjusting the vertical space between lines of text to improve readability and aesthetics?",
    image: "/images/typesettingImage4.png",
    option1: "Tracking",
    option2: "Baseline",
    option3: "Leading",
    option4: "Ascender",
    answer: 3,
  },
  {
    question:
      "What is the term for the adjustment of the space between individual characters in a word?",
    image: "/images/typesettingImage5.png",
    option1: "Kerning",
    option2: "Tracking",
    option3: "Alignment",
    option4: "Line height",
    answer: 2,
  },
];

const correctAnswerPoints = 10; // points per correct answer
const maxQuestions = 5;

function startGame() {
  questionCounter = 0;
  playerScore = 0;
  computerScore = 0;
  availableQuestions = [...questions]; // gets a full COPY of all the questions from the questions array into availableQuestions
  // console.log(availableQuestions);
  getNewQuestion();
}
function getNewQuestion() {
  if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    return window.location.assign("/html/round-four.html");
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
    // console.log(Number(selectedAnswer), currentQuestion.answer);
    // console.log(currentQuestion);
    computerScore += correctAnswerPoints; // computer  gets 10pts when player gets answer correct
    if (Number(selectedAnswer) === currentQuestion.answer) {
      playerScore += correctAnswerPoints;
      updateScores();
      alert("Correct!");
      getNewQuestion();
      goToRoundFour();
    } else {
      playerScore -= correctAnswerPoints;
      alert("NOT Correct");
      getNewQuestion();
      wrongAnswers++;
      if (wrongAnswers > 2) {
        alert("You got more than 2 questions wrong. Game over.");
        resetAndGoHome();
      }
    }
    if (wrongAnswers < 2 && availableQuestions.length === 0) {
      alert(
        "You've passed ROUND 3! You can now advance to ROUND 4! (Usability Heuristics)"
      );
      window.location.assign("/html/round-four.html");
    }

    if (Number(selectedAnswer) !== currentQuestion.answer) {
      return updateScores();
    }
  });
});

function updateScores() {
  robotScoreElement.textContent = String(computerScore).padStart(5, "0"); // changed the minus sign to an equals sign! It works
  playerScoreElement.textContent = String(playerScore).padStart(5, "0");
}

function goToRoundOne() {
  if (availableQuestions.length === 0 || questionCounter >= maxQuestions)
    return window.location.assign("/html/round-one.html");
}

function goToRoundFour() {
  if (availableQuestions.length === 0 && questionCounter >= maxQuestions)
    return window.location.assign("/html/round-four.html");
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
  playerScore = 0;
  computerScore = 0;
  updateScores();
}

startGame();
goToRoundFour();
// add this in a condition to reset and restart the game: windows.location.reload()
