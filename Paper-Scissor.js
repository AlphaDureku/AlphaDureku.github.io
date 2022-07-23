var global;
let player = 0;
let PC = 0;
let playerScore = 0;
let computerScore = 0;
let winner = 2;

function select(id) {
  let myID = document.getElementById(id);
  myID.classList.toggle("fullBorder");
  if (global != null) {
    global = null;
  } else {
    global = myID;
  }
}

//Button & playerImage
function confirm() {
  global.classList.remove("fullBorder");
  let rock = document.getElementById("rock");
  let paper = document.getElementById("paper");

  if (rock == global) {
    const img = document.createElement("img");
    img.setAttribute("class", "img-responsive");
    img.setAttribute("src", "Components/rock.png");
    let parent = document.getElementById("result1");
    img.setAttribute("width", "50%");
    parent.replaceChild(img, parent.childNodes[0]);
    global = null;
    player = 0;
  } else if (paper == global) {
    const img = document.createElement("img");
    img.setAttribute("class", "img-responsive");
    img.setAttribute("src", "Components/paper.png");
    let parent = document.getElementById("result1");
    img.setAttribute("width", "50%");
    parent.replaceChild(img, parent.childNodes[0]);
    global = null;
    player = 1;
  } else {
    const img = document.createElement("img");
    img.setAttribute("class", "img-responsive");
    img.setAttribute("src", "Components/scissor.png");
    let parent = document.getElementById("result1");
    img.setAttribute("width", "50%");
    parent.replaceChild(img, parent.childNodes[0]);
    global = null;
    player = 2;
  }
}

//Computer Image
function computer() {
  let random = Math.floor(Math.random() * 2);

  if (random == 0) {
    const img = document.createElement("img");
    img.setAttribute("class", "img-responsive");
    img.setAttribute("src", "Components/rock.png");
    let parent = document.getElementById("result2");
    img.setAttribute("width", "50%");
    parent.replaceChild(img, parent.childNodes[0]);
    PC = 0;
  } else if (random == 1) {
    const img = document.createElement("img");
    img.setAttribute("class", "img-responsive");
    img.setAttribute("src", "Components/paper.png");
    let parent = document.getElementById("result2");
    img.setAttribute("width", "50%");
    parent.replaceChild(img, parent.childNodes[0]);
    PC = 1;
  } else {
    const img = document.createElement("img");
    img.setAttribute("class", "img-responsive");
    img.setAttribute("src", "Components/scissor.png");
    let parent = document.getElementById("result2");
    img.setAttribute("width", "50%");
    parent.replaceChild(img, parent.childNodes[0]);
    PC = 2;
  }
  solution();
}

//displayResult
function solution() {
  if (PC == player) {
    const gameResult = document.createElement("h1");
    let content = `It's a Tie!!!`;
    gameResult.textContent = content;
    let parent = document.getElementById("displayResult");
    parent.replaceChild(gameResult, parent.childNodes[0]);
  } else if (player == 0 && PC == 1) {
    const gameResult = document.createElement("h1");
    let content = `Computer Wins!!!`;
    gameResult.textContent = content;
    let parent = document.getElementById("displayResult");
    parent.replaceChild(gameResult, parent.childNodes[0]);
    computerScore++;
    DisplayPC(computerScore);
  } else if (player == 0 && PC == 2) {
    const gameResult = document.createElement("h1");
    let content = `Player 1 Wins!!!`;
    gameResult.textContent = content;
    let parent = document.getElementById("displayResult");
    parent.replaceChild(gameResult, parent.childNodes[0]);
    playerScore++;
    Display(playerScore);
  } else if (player == 1 && PC == 0) {
    const gameResult = document.createElement("h1");
    let content = `Player 1 Wins!!!`;
    gameResult.textContent = content;
    let parent = document.getElementById("displayResult");
    parent.replaceChild(gameResult, parent.childNodes[0]);
    playerScore++;
    Display(playerScore);
  } else if (player == 1 && PC == 2) {
    const gameResult = document.createElement("h1");
    let content = `Computer Wins!!!`;
    gameResult.textContent = content;
    let parent = document.getElementById("displayResult");
    parent.replaceChild(gameResult, parent.childNodes[0]);
    computerScore++;
    DisplayPC(computerScore);
  } else if (player == 2 && PC == 0) {
    const gameResult = document.createElement("h1");
    let content = `Computer Wins!!!`;
    gameResult.textContent = content;
    let parent = document.getElementById("displayResult");
    parent.replaceChild(gameResult, parent.childNodes[0]);
    computerScore++;
    DisplayPC(computerScore);
  } else if (player == 2 && PC == 1) {
    const gameResult = document.createElement("h1");
    let content = `Player 1 Wins!!!`;
    gameResult.textContent = content;
    let parent = document.getElementById("displayResult");
    parent.replaceChild(gameResult, parent.childNodes[0]);
    playerScore++;
    Display(playerScore);
  }
  playAgain();
}

function Display(playerScore) {
  let score = document.createElement("h2");
  let parent = document.getElementById("playerScore");

  let content = "Player Score: " + playerScore;
  score.textContent = content;
  parent.replaceChild(score, parent.childNodes[1]);
  check_Winner();
}

function DisplayPC(computerScore) {
  let score2 = document.createElement("h2");
  let parent = document.getElementById("computerScore");
  let content2 = "ComputerScore: " + computerScore;
  score2.textContent = content2;
  parent.replaceChild(score2, parent.childNodes[1]);
  check_Winner();
}

function playAgain() {
  let btn = document.createElement("button");
  let path = document.getElementById("btn1");
  btn.setAttribute("class", "btn btn-primary btn-lg m-5");
  btn.setAttribute("onclick", "confirm(), computer()");
  let content = "Pick Again?";
  btn.textContent = content;
  path.parentNode.replaceChild(btn, path);
}

function check_Winner() {
  if (playerScore == winner) {
    alert("Congratulations you Won!");
  } else if (computerScore == winner) {
    alert("Computer Won the Game!");
  }
}
