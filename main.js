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
var actualSong = 'assets/songs/bedroom_song.mp3';
var background = "assets/backgrounds/bedroom.jpg";

// User Actions
for (let i = 0; i < game.answers.length; i++) {
  game.answers[i].addEventListener('click', function() {
    getUserAnswer(this);
  });
}

game.container.addEventListener('animationend', function() {
  game.container.classList.remove('changeBg');
})

function displayScene() {
  game.container.style.backgroundImage = "url(" + background + ")";
  game.pnjText.textContent = actualTml[steps].pnjText.content;
  if (steps == 3 || steps == 7 && actualTml == trueTml) {
    game.container.classList.add('changeBg');
  }
  game.pnj.src = actualTml[steps].pnjText.pnj;
  for (let a = 0; a < game.answers.length; a++) {
    game.answers[a].textContent = actualTml[steps].answers[a].content;
    game.answers[a].dataset.type = actualTml[steps].answers[a].data;
  }
  launchMusic();
}

function getUserAnswer(choice) {
  if (choice.dataset.type == 1 && actualTml == trueTml) {
    actualTml = trueTml;
    steps++;
  } else if (choice.dataset.type == 2 && actualTml == trueTml) {
    actualTml = falseTml;
  } else if (choice.dataset.type == 1 && actualTml == falseTml ) {
    actualTml = trueTml;
    steps++;
  } else if (choice.dataset.type == 2 && actualTml == falseTml) {
    actualTml = dieTml;
  }
  if (choice.dataset.type == 3 && actualTml == trueTml) {
    actualTml = trueAltTml;
    steps = 0;
  }
  if (choice.dataset.type == 1 && actualTml == trueAltTml) {
    actualTml = trueAltTml;
    steps++;
  } else if (choice.dataset == 2 && actualTml == trueAltTml) {
    actualTml = falseAltTml;
  } else if (choice.dataset == 1 && actualTml == falseAltTml) {
    actualTml = trueAltTml;
    steps++;
  } else if (choice.dataset == 2 && actualTml == falseAltTml) {
    actualTml = infiniteAltTml;
  } else if (actualTml == infiniteAltTml) {
    actualTml = trueAltTml;
  }
  getBackground();
  console.log(steps);
}

function getBackground() {
  if (steps == 0) {
    background = 'assets/backgrounds/bedroom.jpg';
  } else if (steps == 3) {
    background = 'assets/backgrounds/street.jpg';
  } else if (steps == 7) {
    background = 'assets/backgrounds/roof.jpg';
  }
  displayScene();
}

// Audio
var audio = document.querySelector('.audio');
var memory = 'assets/songs/home_song.mp3';

function launchMusic() {
  getSong();
  console.log(memory);
  if (memory !== actualSong) {
    memory = actualSong;
    audio.src = actualSong;
    audio.volume = '0.1';
    audio.play();
  }
}

function getSong() {
  if (steps == 0) {
    actualSong = "assets/songs/bedroom_song.mp3";
  } else if (steps == 3) {
      actualSong = "assets/songs/street_song.mp3";
  } else if (steps == 7) {
      actualSong = "assets/songs/roof_song.mp3";
  }
  return actualSong;
}
