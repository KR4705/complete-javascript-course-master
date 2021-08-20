'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

//slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(1, -1));
// console.log(arr.slice()); // same as [...arr]

//SPLICE
// console.log(arr.splice(2)); // removes the sliced array from the original array
// arr.splice(1, 1); //removes first element and the next 1 element
// arr.splice(-1); //removes the last element

//reverse -- mutates the original array
// console.log(arr.reverse());

//concat -- does not mutate the OG array
// const arr2 = arr.concat(arr);
// console.log(arr2);
// console.log(arr);

//join
// console.log(arr.join(' - '));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const trans of movements) {
//   trans > 0
//     ? console.log(`you have deposited Rs.${trans}`)
//     : console.log(`Accound debited with Rs.${Math.abs(trans)}`);
// }

// movements.forEach((x, i, arr) =>
//   x > 0
//     ? console.log(
//         `trans ${i + 1}: you have deposited Rs.${x}
// log ${arr.slice(0, i + 1)}`
//       )
//     : console.log(`trans ${i + 1}:Accound debited with Rs.${Math.abs(x)}
// log ${arr.slice(0, i + 1)}`)
// );
// (method) Array<string | number>.forEach(callbackfn: (value: string | number, index: number, array: (string | number)[]) => void, thisArg?: any): void

//for each on map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key) => console.log(`${key}, ${value}`));

//for each on Set
const currenciesUniq = new Set(['USD', 'EUR', 'GBP', 'USD', 'INR', 'KWD']);

// console.log(currenciesUniq);
// currenciesUniq.forEach((x, y, z) => console.log(`${x},${y},${z}`)); // key and value are same

//Creating DOM elements
//stlye.css changed opacity to reaveal the elements
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((move, i) => {
    const type = move > 0 ? `deposit` : `withdrawal`;
    const html = `<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__date">3 days ago</div>
  <div class="movements__value">${move}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
  // console.log(movements);
};
displayMovements(account1.movements);

//update balance for the movements & Display
const calcDisplayBal = function (movements) {
  const balance = movements.reduce((bal, mov) => bal + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBal(account1.movements);

//Calc summary using movements and update in the page

const calcDisplaySummary = function (movements, ir) {
  const deposits = movements.filter(x => x > 0).reduce((sum, x) => sum + x, 0);
  labelSumIn.textContent = `${deposits}€`;
  const withdrawals = movements
    .filter(x => x < 0)
    .reduce((sum, x) => sum - x, 0);
  labelSumOut.textContent = `${withdrawals}€`;
  //interest is paid on each deposit at the rate specified
  const interest = movements
    .filter(x => x > 0)
    .map(x => (x * ir) / 100)
    .filter(int => int > 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements, account1.interestRate);

// Challenge 1
// data 1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
// // data 2
// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];

const checkDogs = (dogsJulia, dogsKate) => {
  const dogsJuliaFinal = dogsJulia.slice(1, -2);
  const dogsBoth = dogsJuliaFinal.concat(dogsKate);
  dogsBoth.forEach((age, i) => {
    const type = age > 3 ? `an adult` : `still a puppy`;
    console.log(
      `Dog number is ${i + 1} ${type} ${
        age > 3 ? `and is ${age} years old` : `🐾`
      }`
    );
  });
};

// checkDogs(dogsJulia, dogsKate);

//challenge 2
const calcAverageHumanAge = function (ages) {
  const avgHumanAge = ages
    .map(age => (age <= 2 ? 2 * age : 16 + 4 * age))
    .filter(hAge => hAge >= 18)
    .reduce((acc, x, i, arr) => acc + x / arr.length, 0);
  return avgHumanAge;

  // const agesHuman = ages.map(x => (x <= 2 ? 2 * x : 16 + 4 * x));
  // const agesHuman18 = agesHuman.filter(x => x >= 18);
  // const avgHumanAge = agesHuman18.reduce(
  //   (acc, x) => acc + x / agesHuman18.length,
  //   0
  //dont forget that reduce function must return the acc else it will be undefined;
  // console.log(agesHuman18, avgHumanAge);
  // console.log(agesHuman);
};
//case 1 and 2
const dogHumanaverage1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const dogHumanaverage2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(dogHumanaverage1, dogHumanaverage2);
// Map method
// example
const movementsDouble = movements.map(i => i * 2);
// console.log(movementsDouble);

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
// console.log(accounts);

//filter method
//NOTE: the function should return a boolean value, otherwise it is just like foreach method right ?
const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);
//reduce usage
const balance = movements.reduce(
  (acc, mov, i, arr) => (acc += mov), //Init/default==0 as the array is number array what if it was not?
  //NOTE:will the reduce return the acc object? YES
  0 //initial value
);
// console.dir(balance);

// let balanceFor = 0;
// movements.forEach(mov => (balanceFor += mov));
// console.log(balanceFor);
