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
      "Which usability heuristic suggests that the system's language, concepts, and navigation should be consistent with what a user experiences in daily life?",
    image: "images/usabilityImage1.png",
    option1: "Error prevention",
    option2: "Match between system and the real world",
    option3: "Visibility of system status",
    option4: "User control and freedom",
    answer: 2,
  },
  {
    question:
      'What does the usability heuristic "Consistency and Standards" emphasize in interface design?',
    image: "images/usabilityImage2.png",
    option1: "Providing minimal feedback",
    option2: "Using a wide variety of colors",
    option3: "Following established design conventions",
    option4: "Making every button visually distinct from other elements",
    answer: 4,
  },
  {
    question:
      'According to the usability heuristic "User control and freedom," what should users have the ability to do?',
    image: "images/usabilityImage3.png",
    option1: "Be guided step-by-step through the interface",
    option2: "Undo actions and escape undesirable states",
    option3: "Access extensive help documentation",
    option4: "Always navigate forward, but not backward",
    answer: 2,
  },
  {
    question:
      'What should designers consider to adhere to the usability heuristic "Flexibility and efficiency of use"?',
    image: "images/usabilityImage4.png",
    option1: "Providing identical functionality for all users",
    option2: "Removing advanced features for novice users",
    option3: "Creating separate interfaces for different tasks",
    option4: "Offering shortcuts for experienced users",
    answer: 4,
  },
  {
    question:
      "Which usability heuristic emphasizes the need to offer users clear and timely feedback and to know where they are on the website?",
    image: "images/usabilityImage5.png",
    option1: "Visibility of system status",
    option2: "Consistency and standards",
    option3: "Match between system and the real world",
    option4: "Aesthetic and minimalist design",
    answer: 1,
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
    return window.location.assign("html/round-four.html");
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
        "You've passed ROUND 4 and you have WON THE GAME! Stay tuned for more questions and more levels!"
      );
      window.location.assign("html/round-four.html");
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
    return window.location.assign("html/round-one.html");
}

function goToRoundFour() {
  if (availableQuestions.length === 0 && questionCounter >= maxQuestions)
    return window.location.assign("html/round-four.html");
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
  window.location.assign("index.html");
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScores();
}

startGame();
goToRoundFour();
// add this in a condition to reset and restart the game: windows.location.reload()