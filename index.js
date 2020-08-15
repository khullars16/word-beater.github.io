window.addEventListener('load', init);

//Available levels

const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

const currentLevel = levels.easy;

// Globals
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// Word Array
  const words = ['hello', 'bye', 'new', 'get', 'good', 'hope', 'legacies', 'teen', 'wolf', 'supernaturals', 'typing', 'speed-test', 'virus', 'shutdown', 'windows', 'weather', 'mindmaker','youtube', 'instagram', 'twitter', 'landlord', 'superheroes', 'supervillains', 'supercomputers', 'magicmaker','canada', 'america', 'australia', 'austria'];

// Initalize game
function init() {
    seconds.innerHTML = currentLevel;
    // load word from array
    showWord(words);
    // start matching on word input
    wordInput.addEventListener('input', startMatch);
    // call countdown every second
    setInterval(countdown, 1000);
    // check status
    setInterval(checkStatus, 50);

}

// start Match
function startMatch() {
    if (matchWords()) {
        isplaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = "";
        score++;
    }
    if (score === -1) { scoreDisplay.innerHTML = 0; }
    else {
        scoreDisplay.innerHTML = score;
    }
}


function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "correct";
        return true;
    }
    else {
        message.innerHTML = "";
        return false;
    }
}


// pick and show random word
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

// countdown timer
function countdown() {
    // check time not run out
    if (time > 0) {
        time--;
    }
    else if (time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

// check status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}
