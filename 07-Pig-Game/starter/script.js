'use strict';
const rollDice = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const btHold = document.querySelector('.btn--hold');

//dice
const diceEl = document.querySelector('.dice');
//player scores elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

//playes active elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//start of game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//player switch logic

//roll the dice
//maintain score
const scores = [0, 0]; //totalscore
let currentScore = 0;
let activePlayer = 0; //initiating at player 1
let playing = true; //state variable of the game

const playerSwitch = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//roll dice functionality
rollDice.addEventListener('click', function () {
  if (playing) {
    //1.generating new dice roll
    let rollNum = Math.trunc(Math.random() * 6 + 1);
    console.log(rollNum);
    // 2.display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${rollNum}.png`;
    //3.check if roll is 1 and if true Switch player
    if (rollNum !== 1) {
      //current-score
      currentScore += rollNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // currentScore0El.textContent = currentScore; //change it to currrent player
    } else {
      //player switch reset current-score to 0
      playerSwitch();
    }
  }
});

btHold.addEventListener('click', function () {
  if (playing) {
    // hold logic implementation
    //add the currentScore to score reset currentScore to 0 and switch player
    // if (!activePlayer) {
    //   scores[0] += currentScore;
    //   currentScore = 0;
    //   score0El.textContent = scores[0];
    // } else {
    //   scores[1] += currentScore;
    //   currentScore = 0;
    //   score1El.textContent = scores[1];
    // }
    scores[activePlayer] += currentScore;
    //no need to update both can update only one
    // score1El.textContent = scores[1];
    // score0El.textContent = scores[0];
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //if score > 100 declare winner
    if (scores[activePlayer] >= 10) {
      // document.querySelector(`.player--${activePlayer}`).style.backgroundColor =
      //   '#313438';

      // document.getElementById(`name--${activePlayer}`).style.color = 'white';
      // now winner yet

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.getElementById(`name--${activePlayer}`).textContent = 'Winner';
      diceEl.classList.add('hidden');
      playing = false;
    } else {
      playerSwitch();
    }
  }
});

newGame.addEventListener('click', function () {
  document.getElementById(`name--${activePlayer}`).textContent = `Player ${
    activePlayer + 1
  }`;
  //reset the game state
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  //scores in JS var reset
  scores[0] = 0;
  scores[1] = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  if (activePlayer) {
    //roll back to player 0
    playerSwitch();
  } else {
    //if no roll back, resetting the current score
    currentScore = 0;
    //update DOM scores
    document.getElementById(`current--${activePlayer}`).textContent = 0;
  }
});
