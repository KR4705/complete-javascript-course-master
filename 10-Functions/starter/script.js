'use strict';

const bookings = [];
//default parameters
const createBooking = function (
  flightNum,
  numPasseners = 1,
  price = 199 * numPasseners
  //have to use after numPassengers is already declared
) {
  //   ES5
  //   numPasseners = numPasseners || 1;
  //   price = price || 199

  const booking = {
    flightNum,
    numPasseners,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', undefined, 1000);

//How passing arguments works
// Value vs reference
const flight = 'LH234';
const rohith = {
  name: 'Rohith Sreeramdas',
  passport: 2456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; // doesnt get reflected in flightNum passed
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport == 2456789) {
    alert('Checked in');
  } else {
    alert('wrong passport');
  }
};

// checkIn(flight, rohith);
// console.log(flight);
// console.log(rohith);
//primitve argument -- copy of the origninal
// object argument -- object reference is passed updates the Original object

//first class function vs higher-order functions
//can store functions in variables or properties
//Pass functions as arguments for other functions
//return functions from functions
//call methods on functions
//example bind

//higher order functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstCase = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`OG string : ${str}`);
  console.log(`Transformer: ${fn.name}`);
  console.log(`Transformed string : ${fn(str)}`);
};

// transformer('author : rohith', upperFirstCase);
// transformer(`rohith sreeramdas`, oneWord);

const high5 = function () {
  console.log('This is body');
};
// document.body.addEventListener('click', high5);

//example of another higher level function predefined are forEach
// 'wtf'.split('').forEach(high5);

//functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
const greeterHey = greet('Hey'); //this is a function
// greetArr('Hey')('Rohith');

//the call and apply methods
const emirates = {
  airline: 'Emirates',
  iataCode: 'EM',
  bookings: [],
  //book : function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a flight on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${this.flightNum}`, name });
  },
};

// emirates.book(239, 'rohith');
// emirates.book(635, 'bandi');
// console.log(emirates);

const emiratesFC = {
  airline: 'EmiratesFC',
  iataCode: 'EF',
  bookings: [],
  //   book: emirates.book, // still doesnt work
};

const book = emirates.book;
//manually manipulating this object by using call
//  on the function defined in an object
//call method
// book.call(emiratesFC, 23, 'peddy');
// console.log(emiratesFC); //this works

// Apply method
const flightData = [23, 'Sonika'];

//not so great can use call instead example below
// book.apply(emiratesFC, flightData);
// book.call(emiratesFC, ...flightData);
// console.log(emiratesFC);

// Bind method
const bookFC = book.bind(emiratesFC);
//additionally can bind other arguments as well
const bookFC1 = book.bind(emiratesFC, 1);
// bookFC1('bandi');

//with event listerners
emirates.planes = 300;
emirates.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//powerful usage bind
document
  .querySelector('.buy')
  .addEventListener('click', emirates.buyPlane.bind(emirates));

//partial application of bind

const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.05);
// console.log(addVAT(100));

const addTaxRate = rate => amount => amount + amount * rate;
const addVAT2 = addTaxRate(0.05);
// console.log(addVAT2(200));

//coding challenge 1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(`${this.question}
    ${this.options[0]}
    ${this.options[1]}
    ${this.options[2]}
    ${this.options[3]}
    (Write option number)`)
    );
    // console.log(answer);
    [0, 1, 2, 3].includes(answer) && this.answers[answer]++; //short circut :) and the instructor code doenst handle decimals. BUG fixed
    // console.log(this.answers);
    this.displayResults('string');
  },
  displayResults: function (type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const displayResults = poll.displayResults;

displayResults.call({ answers: [5, 2, 3] }, 'string');
displayResults.call({ answers: [5, 2, 3] });

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
