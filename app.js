// make the first category button clickable to another pg.
let designPrinciplesButton = document.querySelector(".design-principles-button");
designPrinciplesButton.addEventListener("click", function () {
  window.location = "design-principles.html";
});

const questions = [
  {
    category: [
      // 3 categories for starters
      ["Design Principles", "Color Theory", "Typesetting"],
    ],
    question: [
      // 5 questions per category (15 questions total)
      [
        'What design principle is most represented in the "ELIFE" heading?',
        "Which part is displaying emphasis?",
        "Question 3",
        "Question 4",
        "Question 5",
      ],
    ],
    option: [
      [
        // 4 options per question
        ["Alignment", "Hue", "Hierarchy", "Proximity"],
        ["design 1", "design 2", "design 3", "design 4"],
        ["design 1", "design 2", "design 3", "design 4"],
        ["design 1", "design 2", "design 3", "design 4"],
        ["design 1", "design 2", "design 3", "design 4"],
      ][ // 4 options per question
        (["Alignment", "Hue", "Hierarchy", "Proximity"],
        ["design 1", "design 2", "design 3", "design 4"],
        ["design 1", "design 2", "design 3", "design 4"],
        ["design 1", "design 2", "design 3", "design 4"],
        ["design 1", "design 2", "design 3", "design 4"])
      ][ // 4 options per question
        (["Alignment", "Hue", "Hierarchy", "Proximity"],
        ["design 1", "design 2", "design 3", "design 4"],
        ["design 1", "design 2", "design 3", "design 4"],
        ["design 1", "design 2", "design 3", "design 4"],
        ["design 1", "design 2", "design 3", "design 4"])
      ][ // 4 options per question
        (["Alignment", "Hue", "Hierarchy", "Proximity"],
        ["design 1", "design 2", "design 3", "design 4"],
        ["design 1", "design 2", "design 3", "design 4"],
        ["design 1", "design 2", "design 3", "design 4"],
        ["design 1", "design 2", "design 3", "design 4"])
      ][ // 4 options per question
        (["Alignment", "Hue", "Hierarchy", "Proximity"],
        ["design 1", "design 2", "design 3", "design 4"],
        ["design 1", "design 2", "design 3", "design 4"],
        ["design 1", "design 2", "design 3", "design 4"],
        ["design 1", "design 2", "design 3", "design 4"])
      ],
    ],
  },
];

// let designAnswerOptions = ["Alignment", "Hue", "Hierarchy", "Proximity"];
let designAnswerButtons = [
  document.querySelector(".button1"),
  document.querySelector(".button2"),
  document.querySelector(".button3"),
  document.querySelector(".button4"),
];

// function updateOptions()

// function setDesignAnswerButtons() {
//     let designAnswerOptions = ["Alignment", "Hue", "Hierarchy", "Proximity"];
//     let designAnswerButtons = [
//         document.querySelector(".button1"),
//         document.querySelector(".button2"),
//         document.querySelector(".button3"),
//         document.querySelector(".button4")
//     ];

//     for (let i = 0; i < designAnswerButtons.length; i++) {
//         designAnswerButtons[i].textContent = designAnswerOptions[i];
//     }
// }
// setDesignAnswerButtons();
