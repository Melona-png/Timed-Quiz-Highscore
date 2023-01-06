const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const scoreText = document.querySelector("#score");

const timeH = document.querySelector("h3");
let timeSecond = 90;

timeH.innerHTML = ` ${timeSecond}`;

const countDown = setInterval(() => {
  timeSecond--;
  timeH.innerHTML = ` ${timeSecond}`;
  if (timeSecond <= 0 || timeSecond < 1) {
    clearInterval(countDown);
  }
}, 1000);

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "what is two",
    choice1: "22",
    choice2: "2",
    choice3: "8",
    choice4: "10",
    answer: 2,
  },
  {
    question: "what is three",
    choice1: "22",
    choice2: "3",
    choice3: "8",
    choice4: "10",
    answer: 2,
  },
  {
    question: "what is four",
    choice1: "22",
    choice2: "4",
    choice3: "8",
    choice4: "10",
    answer: 2,
  },
  {
    question: "what is five",
    choice1: "22",
    choice2: "5",
    choice3: "8",
    choice4: "10",
    answer: 2,
  },
  {
    question: "what is six",
    choice1: "22",
    choice2: "4",
    choice3: "6",
    choice4: "10",
    answer: 3,
  },
];

// scoreText.textContent = score;

startGame = () => {
  questionCounter = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0) {
    localStorage.setItem("mostRecentScore", timeSecond);

    return window.location.assign("/endpage.html");
  }

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset.choice;
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset.choice;

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      timeSecond += 10;
      selectedChoice.parentElement.classList.add(classToApply);

      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
      }, 500);
    } else {
      timeSecond -= 10;
      selectedChoice.parentElement.classList.add(classToApply);

      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
      }, 500);
      // if the wrong answer, then decrement the timer, check if the timer is less than 0, then go to endgame.html
    }
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
