// Home Page
var home = {
  page : document.querySelector('.home'),
  button : document.querySelector('.home-button')
}

home.button.addEventListener('click', function() {
  hideHome();
  displayScene();
});

function hideHome() {
  home.page.classList.add('hideHome');
}

// Game
var game = {
  pnj: document.querySelector('.decorInterface-pnj'),
  pnjText: document.querySelector('.userInterface-pnj-text'),
  answers: document.querySelectorAll('.userInterface-user-item')
}

// Memory Variables
var steps = 0,
    actualTml = trueTml,
    background = "../assets/backgrounds/bedroom.png";

// User Actions
for (let i = 0; i < game.answers.length; i++) {
  game.answers[i].addEventListener('click', function() {
    getUserAnswer(this);
  });
}

// Texts Functions
function displayScene() {
  game.pnjText.textContent = actualTml[steps].pnjText.content;
  game.pnj.src = actualTml[steps].pnjText.pnj;
  for (let a = 0; a < game.answers.length; a++) {
    game.answers[a].textContent = actualTml[steps].answers[a].content;
    game.answers[a].dataset.type = actualTml[steps].answers[a].data;
  }
  console.log(steps);
}

function getUserAnswer(choice) {
  if (choice.dataset.type == 1 && actualTml == trueTml) {
    actualTml = trueTml
  } else if (choice.dataset.type == 2 && actualTml == trueTml) {
    actualTml = falseTml;
  } else if (choice.dataset.type == 1 && actualTml == falseTml ) {
    actualTml = trueTml;
    steps--;
  } else if (choice.dataset.type == 2 && actualTml == falseTml) {
    actualTml = dieTml;
  }
  steps++;
  displayScene();
}

function getBackground() {
  if (steps < 10) {
    background = "../assets/backgrounds/bedroom.png";
  } else if (steps <= 20) {
    background = "../assets/backgrounds/street.png";
  } else if (steps <= 20) {
    background = "../assets/backgrounds/toit.png";
  }
}
