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
  container : document.querySelector('.gameContainer'),
  pnj: document.querySelector('.decorInterface-pnj'),
  pnjText: document.querySelector('.userInterface-pnj-text'),
  answers: document.querySelectorAll('.userInterface-user-item')
}

// Memory Variables
var steps = 0;
var actualTml = trueTml;
var background = "assets/backgrounds/bedroom.jpg";

// User Actions
for (let i = 0; i < game.answers.length; i++) {
  game.answers[i].addEventListener('click', function() {
    getUserAnswer(this);
  });
}

// Texts Functions
function displayScene() {
  game.container.style.backgroundImage = "url(" + background + ")";
  game.pnjText.textContent = actualTml[steps].pnjText.content;
  game.pnj.src = actualTml[steps].pnjText.pnj;
  for (let a = 0; a < game.answers.length; a++) {
    game.answers[a].textContent = actualTml[steps].answers[a].content;
    game.answers[a].dataset.type = actualTml[steps].answers[a].data;
  }
}

function getUserAnswer(choice) {
  if (choice.dataset.type == 1 && actualTml == trueTml) {
    actualTml = trueTml;
    steps++;
  } else if (choice.dataset.type == 2 && actualTml == trueTml) {
    actualTml = falseTml;
    steps++;
  } else if (choice.dataset.type == 1 && actualTml == falseTml ) {
    actualTml = trueTml;
  } else if (choice.dataset.type == 2 && actualTml == falseTml) {
    actualTml = dieTml;
  }
  if (choice.dataset.type == 3) {
    actualTml = altTml;
    steps = 0;
  }
  if (choice.dataset.type == 1 && actualTml == altTml) {
    actualTml = altTml;
    steps++;
  } else if (choice.dataset == 2 && actualTml == altTml) {
    actualTml = badAltTml;
  } else if (choice.dataset == 1 && actualTml == badAltTml) {
    actualTml = altTml;
    steps++;
  } else if (choice.dataset == 2 && actualTml == badAltTml) {
    actualTml = infiniteTml;
  }
  getBackground();
  console.log(steps);
}

function getBackground() {
  if (actualTml != altTml) {
    if (steps < 3) {
      background = "assets/backgrounds/bedroom.jpg";
    } else if (steps >= 3) {
      background = "assets/backgrounds/street.jpg";
    }
  } else {
    if (steps < 10) {
      background = "assets/backgrounds/street.jpg";
    }
  }
  displayScene();
}
