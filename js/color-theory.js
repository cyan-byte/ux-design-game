let question = document.querySelector(".level-question1");
let options = document.querySelectorAll(".option");
let questionImage = document.querySelector(".question-image");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: 'Color theory question 1?',
    image: "/images/colorTheoryImage1.png",
    option1: "?",
    option2: "?",
    option3: "?",
    option4: "?",
    answer: 4,
  },
  {
    question:
      "Color theory quesiton 2?",
    image: "/images/colorTheoryImage2.png",
    option1: "?",
    option2: "?",
    option3: "?",
    option4: "?",
    answer: 3,
  },
  {
    question: "Color thoery question 3?",
    image: "/images/colorTheoryImage3.png",
    option1: "?",
    option2: "?",
    option3: "?",
    option4: "?",
    answer: 3,
  },
  {
    question: "Color theory question 4?",
    image: "/images/colorTheoryImage4.png",
    option1: "?",
    option2: "?",
    option3: "?",
    option4: "?",
    answer: 5,
  },
  {
    question:
      "Color theory question 5?",
    image: "/images/colorTheoryImage5.png",
    option1: "?",
    option2: "?",
    option3: "?",
    option4: "?",
    answer: 3,
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
  acceptingAnswers = true;
}

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedOption = e.target;
    const selectedAnswer = selectedOption.dataset["number"];

    getNewQuestion();
  });
});

startGame();
