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
displayMovements(movements);

//Challenge 1
//data 1
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
//data 2
const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

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

checkDogs(dogsJulia, dogsKate);
