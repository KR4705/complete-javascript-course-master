'use strict';

//querySelect .message for class names and #message for ID
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 'OK';
// console.log(document.querySelector('.number').value);
// document.querySelector('.guess').value = 23;

//secret number to be found
let highScore = 0;
let score = Number(document.querySelector('.score').textContent);
const defaultScore = score;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//console.log(secretNumber);

//taking the guess input
//event handler should take new input each time so my guess variable will be inside the listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //BUG guess entered is 0 - cant handle
  if (!guess) {
    displayMessage('Enter a value');
    // document.querySelector('.message').textContent = 'Enter a value';
  }
  //guess right
  else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      displayMessage('Thats a new high score');
      //   document.querySelector('.message').textContent = 'Thats a new high score';
      document.querySelector('.highscore').textContent = highScore;
    } else {
      displayMessage('You have guessed it Right');
      //   document.querySelector('.message').textContent =
      //     'You have guessed it Right';
    }
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too high' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lose, try AGAIN');
      //   document.querySelector('.message').textContent = 'you lose, try AGAIN';
      document.querySelector('.score').textContent = 0;
    }
  }
  //too high
  //   else if (guess > secretNumber) {
  // if (score > 1) {
  //   document.querySelector('.message').textContent = 'Too high';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else {
  //   document.querySelector('.message').textContent = 'you lose, try AGAIN';
  //   document.querySelector('.score').textContent = 0;
  // }
  // too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lose, try AGAIN';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  //reset the secretnumber
  score = defaultScore;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  //reset the styles and data
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = defaultScore;
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start Guessing');
});
