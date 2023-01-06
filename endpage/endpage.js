const username = document.querySelector("#username");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScore = document.querySelector("#finalScore");
// const mostRecentScore = document.querySelector("#mostRecentScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 3;

finalScore.innerText = mostRecentScore;

saveScoreBtn.addEventListener("click", function () {
  var initials = username.value;
  if (initials === "") {
    alert("Enter Initials to proceed	ヽ(`⌒´メ)ノ ");

    return null;
  }

  const score = {
    score: mostRecentScore,
    name: username.value,
  };

  highScores.push(score);
  localStorage.setItem("highScores", JSON.stringify(highScores));

  window.location("./highscores/highscores.html");
});
