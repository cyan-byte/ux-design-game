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
      question: 'What design principle is MOST represented in the word "LIVIE"?',
      image: "/images/designImage1.png",
      option1: "Alignment",
      option2: "Hue",
      option3: "Hierarchy",
      option4: "Proximity",
      answer: 3,
    },
    {
      question:
        "Which of these statements about the design principles is correct? ",
      image: "/images/designImage2.png",
      option1: "Design is the same as art.",
      option2: "The rules are what make great designs look the way they do.",
      option3: "They don't actually matter in the professional design world.",
      option4: "There's no such thing as a bad design, only good ones!",
      answer: 2,
    },
    {
      question: "Which statement is correct?",
      image: "/images/designImage3.png",
      option1: "UI is the same as UX",
      option2: "UI is different from UX",
      option3: "The two terms are interchangeable.",
      option4: "The UI doesn't matter.",
      answer: 3,
    },
    {
      question: "What principle does this represent?",
      image: "/images/designImage4.png",
      option1: "Shape",
      option2: "Color",
      option3: "Size and space",
      option4: "Balance",
      answer: 5,
    },
    {
      question:
        "What is the name of the principle that can show users that a piece of content is related to another piece of content?",
      image: "/images/designImage5.png",
      option1: "Scale",
      option2: "Proximity",
      option3: "Height",
      option4: "Negative Space",
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
    // else {
    //     score -= correctAnswerPoints;
    //     updateScores()
    // }
    

  });
});

function updateScores() {
    robotScoreElement.textContent = String(score).padStart(5, "0"); // changed the minus sign to an equals sign! It works
    playerScoreElement.textContent = String(score).padStart(5, "0");
}

startGame();
