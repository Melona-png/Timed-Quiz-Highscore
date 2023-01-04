const username = document.querySelector("#username");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScore = document.querySelector("#finalScore");
// const mostRecentScore = document.querySelector("#mostRecentScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

let highScores = [];

const MAX_HIGH_SCORES = 3;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = false;
});

saveScoreBtn.addEventListener("click", function saveHighScore(e) {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };

  highScores.push(score);
  localStorage.setItem("highScores", highScores);
});
