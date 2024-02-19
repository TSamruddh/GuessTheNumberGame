let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);

function displayMsg(msg) {
  document.querySelector(".message").textContent = msg;
}

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMsg("❌Pls enter a number");
    return;
  }

  if (guess === secretNumber) {
    displayMsg("❌Pls enter a number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.background = "#60b347";

    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      displayMsg(guess > secretNumber ? "📉Too High" : "📈Too Low");
    } else {
      displayMsg("💥You lost the Game!");
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = "?";
      document.querySelector("body").style.background = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  displayMsg("Start Guesing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background =
    "radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)";
});
