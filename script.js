const body = document.body,
  enterGame = document.querySelector(".enter_game"),
  mode = document.querySelector(".mode"),
  header = document.querySelector(".enter_game__body h1"),
  cancelBtn = document.querySelector("#cancelBtn"),
  playBtn = document.querySelector("#playBtn");

const playGame = document.querySelector(".play__game"),
  playerHand = document.querySelector("#playerHand"),
  computerHand = document.querySelector("#computerHand"),
  playerWin = document.querySelector(".player_win"),
  computerWin = document.querySelector(".computer_win"),
  tie = document.querySelector(".tie"),
  playerScore = document.querySelector("#playerScore"),
  computerScore = document.querySelector("#computerScore"),
  playGameBtn = document.querySelectorAll(".play_game__btn button"),
  rock = document.querySelector("#rock"),
  paper = document.querySelector("#paper"),
  scissors = document.querySelector("#scissors");

let playerPoint = 0,
  computerPoint = 0;

mode.addEventListener("click", () => {
  if (body.classList.contains("dark_mode")) {
    body.classList.remove("dark_mode");
    body.classList.add("light_mode");
    mode.style.color = "#243b55";
    header.style.color = "#243b55";
  } else {
    body.classList.remove("light_mode");
    body.classList.add("dark_mode");
    mode.style.color = "#fff";
    header.style.color = "#fff";
  }
});
body.classList.add("dark_mode");

function pageCancel() {
  cancelBtn.addEventListener("click", () => {
    window.close();
  });
}
pageCancel();

function startGame() {
  playBtn.addEventListener("click", () => {
    enterGame.style.display = "none";
    playGame.style.display = "flex";
  });
}
startGame();

playGameBtn.forEach((element) => {
  element.addEventListener("click", () => {
    playerHand.classList.add("playerShake");
    computerHand.classList.add("computerShake");

    setTimeout(() => {
      playerHand.classList.remove("playerShake");
      computerHand.classList.remove("computerShake");
    }, 1000);
  });
});

function randomHandComputer() {
  const hands = ["rl", "pl", "sl"];
  let randomHand = Math.floor(Math.random() * 3);
  computerHand.setAttribute("src", `./img/${hands[randomHand]}.png`);
  return hands[randomHand];
}
rock.addEventListener("click", function () {
  playerHand.setAttribute("src", "./img/r.png");
  const checkedComputer = randomHandComputer();
  totalScore("r", checkedComputer);
});
paper.addEventListener("click", function () {
  playerHand.setAttribute("src", "./img/p.png");
  const checkedComputer = randomHandComputer();
  totalScore("p", checkedComputer);
});
scissors.addEventListener("click", function () {
  playerHand.setAttribute("src", "./img/s.png");
  const checkedComputer = randomHandComputer();
  totalScore("s", checkedComputer);
});

function totalScore(player, computer) {
  if (
    (player === "r" && computer === "sl") ||
    (player === "p" && computer === "rl") ||
    (player === "s" && computer === "pl")
  ) {
    playerPoint++;
    playerWin.style.display = "block";
    computerWin.style.display = "none";
    tie.style.display = "none";
  } else if (
    (computer === "rl" && player === "s") ||
    (computer === "pl" && player === "r") ||
    (computer === "sl" && player === "p")
  ) {
    computerPoint++;
    computerWin.style.display = "block";
    playerWin.style.display = "none";
    tie.style.display = "none";
  } else {
    computerWin.style.display = "none";
    computerWin.style.display = "none";
    playerWin.style.display = "none";
    tie.style.display = "block";
  }

  playerScore.textContent = playerPoint;
  computerScore.textContent = computerPoint;
}
