let question = document.querySelector(".level-question");
let options = [...document.querySelectorAll(".option")]; // makes a copy of this selection and the [] turn it to an array
let questionImage = document.querySelector(".question-image");
console.log(options);
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let robotScoreElement = document.getElementById("robot-score-id");
let playerScoreElement = document.getElementById("player-score-id");

let questions = [
  {
    question: 'What design principle is MOST represented in the word "LIVIE"?',
    image: "/images/designImage1.png",
    option1: "Alignment",
    option2: "Hue",
    option3: "Hierarchy",
    option4: "Proximity",
    answer: 3,
  },
  {
    question: "What design principle is MOST shown in the image above?",
    image: "/images/designImage2.png",
    option1: "Negative Space",
    option2: "Movement",
    option3: "Repetition",
    option4: "Contrast",
    answer: 4,
  },
  {
    question:
      "In the image above, what design principle is illustrated by the strategic use of the area around the elements?",
    image: "/images/designImage3.png",
    option1: "Emphasis",
    option2: "Proportion",
    option3: "Negative Space",
    option4: "Alignment",
    answer: 3,
  },
  {
    question:
      "Which design principle is exemplified in the image below by the progression of elements leading the viewer's eye?",
    image: "/images/designImage4.png",
    option1: "Movement",
    option2: "Color",
    option3: "Space",
    option4: "Balance",
    answer: 5,
  },
  {
    question:
      "In the image below, which design principle creates a sense of harmony through the distribution of weight",
    image: "/images/designImage5.png",
    option1: "Scale",
    option2: "Balance",
    option3: "Height",
    option4: "Negative Space",
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
  
