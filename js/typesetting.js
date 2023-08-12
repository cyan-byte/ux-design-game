let question = document.querySelector(".level-question");
let options = document.querySelectorAll(".option");
let questionImage = document.querySelector(".question-image");

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question:
      "What term describes a single word or short line of text that appears at the beginning or end of a paragraph, separated from the rest of the paragraph?",
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
      "What is the term for the short line at the end of a paragraph that appears alone at the top of a page or column, separated from the rest of the paragraph?",
    image: "/images/typesettingImage3.png",
    option1: "Orphan",
    option2: "Hyphen",
    option3: "Widow",
    option4: "Leading",
    answer: 1,
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

const correctBonus = 10; // points per correct answer
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

    }
      else if (Number(selectedAnswer) !== currentQuestion.answer){
        score -= correctAnswerPoints;
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
  nextButton.addEventListener("click", getNewQuestion)
}
nextButtonClick();

startGame();

// add this in a condition to reset and restart the game: windows.location.reload()

