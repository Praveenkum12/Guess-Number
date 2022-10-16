'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const check = document.querySelector('.check');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');
const body = document.querySelector('body');

let scoreValue = 20;
let highScoreValue = Number(highscore.textContent);
let altColor = false;

// console.log(scoreValue);
let randomNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(randomNumber);

const reducer = function () {
  scoreValue--;
  score.textContent = scoreValue;
};

document.querySelector('h1').addEventListener('click', function () {
  if (!altColor) {
    document.querySelector('h1').style.color = 'red';
    altColor = true;
  } else {
    document.querySelector('h1').style.color = 'white';
    altColor = false;
  }
});

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    score.textContent = scoreValue;
    message.textContent = '⛔ No number';
  } else if (guess > 20 || guess < 0) {
    reducer();
    message.textContent = '😒 Invalid number';
  } else if (guess > randomNumber) {
    if (scoreValue > 1) {
      reducer();
      message.textContent = '📈 Too high';
    } else {
      score.textContent = 0;
      message.textContent = '😭 You lost ';
    }
  } else if (guess < randomNumber) {
    if (scoreValue > 1) {
      reducer();
      message.textContent = '📉 Too low';
    } else {
      score.textContent = 0;
      message.textContent = '😭 You lost ';
    }
  } else if (guess === randomNumber) {
    score.textContent = scoreValue;
    message.textContent = '🎉 Correct number';
    number.textContent = randomNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    document.querySelector('.guess').disabled = true;
    if (scoreValue > highScoreValue) {
      highScoreValue = scoreValue;
      highscore.textContent = highScoreValue;
    }
  }
});

again.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  scoreValue = 20;
  score.textContent = 20;
  message.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  number.textContent = '?';
  document.querySelector('.guess').disabled = false;
});
