let question = document.querySelector(".level-question1");
let options = [...document.querySelectorAll(".option")]; // makes a copy of this selection and the [] turn it to an array
let questionImage = document.querySelector(".question-image");
console.log(options)
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let robotScoreElement = document.getElementById("robot-score-id");
let playerScoreElement = document.getElementById("player-score-id");

let questions = [
  {
    question: 'UI/UX question 1?',
    image: "/images/uiUxImage1.png",
    option1: "?",
    option2: "?",
    option3: "?",
    option4: "?",
    answer: 4,
  },
  {
    question: "UIUX quesiton 2?",
    image: "/images/uiUxImage2.png",
    option1: "?",
    option2: "?",
    option3: "?",
    option4: "?",
    answer: 3,
  },
  {
    question: "UIUX question 3?",
    image: "/images/uiUxImage3.png",
    option1: "?",
    option2: "?",
    option3: "?",
    option4: "?",
    answer: 3,
  },
  {
    question: "UIUX question 4?",
    image: "/images/uiUxImage4.png",
    option1: "?",
    option2: "?",
    option3: "?",
    option4: "?",
    answer: 5,
  },
  {
    question:
      "UIUX question 5?",
    image: "/images/uiUxImage5.png",
    option1: "?",
    option2: "?",
    option3: "?",
    option4: "?",
    answer: 3,
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

    // function updateScores() {
    //     robotScoreElement.textContent - String(score).padStart(5, "0");
    //     playerScoreElement.textContent - String(score).padStart(5, "0");
    // }
console.log(Number(selectedAnswer), currentQuestion.answer)
console.log(currentQuestion)
    if (Number(selectedAnswer) === currentQuestion.answer) {
        score += correctAnswerPoints;
        updateScores();
    } 
    else {
        score -= correctAnswerPoints;
        updateScores()
    }

    if (Number(selectedAnswer) !== currentQuestion.answer) {
        return updateScores();
    }
    

  });
});

function updateScores() {
    robotScoreElement.textContent = String(score).padStart(5, "0"); // changed the minus sign to an equals sign! It works
    playerScoreElement.textContent = String(score).padStart(5, "0");
    // if
}

startGame();
