'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2021-08-15T23:36:17.929Z',
    '2021-08-20T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => Math.abs(a) - Math.abs(b))
    : acc.movements;
  movs.forEach((move, i) => {
    const now = new Date(acc.movementsDates[i]);

    const displayDate = formatMoveDate(now);
    const type = move > 0 ? `deposit` : `withdrawal`;
    const html = `<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__date">${displayDate}</div>
  <div class="movements__value">${move}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
  // console.log(movements);
};

const calcDisplayBal = function (acc) {
  acc.balance = acc.movements.reduce((bal, mov) => bal + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (account) {
  const deposits = account.movements
    .filter(x => x > 0)
    .reduce((sum, x) => sum + x, 0);
  const ir = account.interestRate;
  labelSumIn.textContent = `${deposits}€`;
  const withdrawals = account.movements
    .filter(x => x < 0)
    .reduce((sum, x) => sum - x, 0);
  labelSumOut.textContent = `${withdrawals}€`;
  //interest is paid on each deposit at the rate specified
  const interest = account.movements
    .filter(x => x > 0)
    .map(x => (x * ir) / 100)
    .filter(int => int > 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(
    acc =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(x => x[0])
        .join(''))
  );
};
createUsernames(accounts);

const updateUI = function (activeAccount) {
  //display movements
  displayMovements(activeAccount);
  //display summary
  calcDisplaySummary(activeAccount);
  //calc and display Bal
  calcDisplayBal(activeAccount);
};

///////////////////////////////////////
// Event handlers
let activeUser, timer;
//Fake Login(auto)
// activeUser = account1;
// updateUI(account1);
// containerApp.style.opacity = 100;

const now = new Date();
const day = `${now.getDate()}`.padStart(2, '0');
const month = `${now.getMonth() + 1}`.padStart(2, '0');
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();

labelDate.textContent = `${day}/${month}/${year} ${hour}:${min}`;

const formatMoveDate = function (date) {
  const calcDaysPass = (date1, date2) =>
    Math.round(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24)));
  const daysPassed = calcDaysPass(new Date(), date);
  console.log(daysPassed);
  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    const padDate = x => `${x}`.padStart(2, 0);
    const now = new Date(date);
    const day = padDate(now.getDate());
    const month = padDate(now.getMonth() + 1);
    const year = now.getFullYear();
    const hour = padDate(now.getHours());
    const min = padDate(now.getMinutes());
    return `${day}/${month}/${year} ${hour}:${min}`;
  }
};

const startLogoutTimer = function () {
  let time = 100;
  const tick = function () {
    const min = Math.trunc(time / 60);
    const secs = time % 60;
    labelTimer.textContent = `${min}:${secs}`;
    time--;
    if (time === 0) {
      labelTimer.textContent = `Out of time`;
      clearInterval(timer);
      //logout
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
    }
  };
  tick();
  //NOTE: setInterval only calls the function tick 1s after, thats why calling it before
  const timer = setInterval(tick, 1000);
  return timer;
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  //prevents default behaviour which is to submit form for form elements
  activeUser = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (activeUser?.pin === Number(inputLoginPin.value)) {
    //welcome message and Date
    labelWelcome.textContent = `Welcome ${activeUser.owner.split(' ')[0]}!`;
    labelDate.textContent = formatMoveDate(new Date());
    //update the APP UI
    updateUI(activeUser);
    //clear the login form and lose focus
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();
    //become opaque(body)
    containerApp.style.opacity = 100; //default

    //timer logc
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();
  } else {
    //failed Login message?
    labelWelcome.textContent = `Wrong Credentials!`;
  }
});
btnTransfer.addEventListener('click', function (e) {
  //implement transfer from active user to the user submitted
  //update movements in both the users and its done ?
  e.preventDefault();
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(receiverAccount);
  const transferAmount = Number(inputTransferAmount.value);
  if (
    transferAmount > 0 &&
    transferAmount <= activeUser.balance &&
    receiverAccount &&
    receiverAccount.username !== activeUser.username
  ) {
    console.log('YES');
    //add movement to current user

    activeUser.movements.push(-transferAmount);
    activeUser.movementsDates.push(new Date().toISOString());
    //add movement to the other side as well
    receiverAccount.movements?.push(transferAmount);
    receiverAccount.movementsDates.push(new Date().toISOString());
    updateUI(activeUser);
    //clear the login form and lose focus
    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferTo.blur();
    inputTransferAmount.blur();

    clearTimeout(timer);
    timer = startLogoutTimer();
  } else {
    console.log('Not possible');
    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferTo.blur();
    inputTransferAmount.blur();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (activeUser.movements.some(x => x > 0.1 * amount) && amount > 0) {
    //grant loan
    activeUser.movements.push(amount);
    activeUser.movementsDates.push(new Date().toISOString());
    updateUI(activeUser);
  }
  //timer reset
  clearTimeout(timer);
  timer = startLogoutTimer();
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  //validate with PIN and delete that account from array
  const closeAccount = accounts.find(
    acc => acc.username === inputCloseUsername.value
  );
  if (
    closeAccount?.username === activeUser.username &&
    closeAccount.pin === Number(inputClosePin.value)
  ) {
    //delete accounts
    accounts.splice(accounts.indexOf(closeAccount), 1);
    //reset the UI to blank
    containerApp.style.opacity = 0;
    //Welcome update
    labelWelcome.textContent = 'Log in to get started';
  } else {
    console.log('CANNOT DELETE');
  }
  inputCloseUsername.value = inputClosePin.value = '';
  inputCloseUsername.blur();
  inputClosePin.blur();
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(activeUser, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// //difficult for JS will give a delta error in result
// console.log(0.1 + 0.2);
// // will result in false
// console.log(0.1 + 0.2 === 0.3);

// //trick to use to convert string to number
// console.log(Number('23'));
// console.log(+'23');

// //Parsing
// console.log(Number.parseInt('30px', 10));
// //radix == base of the number to be parsed
// console.log(Number.parseInt('e23', 10));
// //cannot have the string start with letter returns NaN

// console.log(Number.parseFloat('  2.5rem'));

// console.log(isNaN(+'23e'));
// //true
// console.log(isNaN(0));
// //false
// console.log(isNaN(23 / 0)); //false

// //Best way to check for number
// console.log(Number.isFinite(20)); //true
// console.log(Number.isFinite('20')); //false
// console.log(Number.isFinite(+'20x')); //false
// console.log(Number.isFinite(23 / 0)); //false
