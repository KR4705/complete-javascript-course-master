'use strict';

// const Person = function (firstName, birthYear) {
//   //   Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   //methods - Never do this not good
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const rohith = new Person('Rohith', 1991);

// //1.New empty object is created
// //function is called, this == {} new empty object
// //{} is linked to prototype
// //function automatically return

// const bandi = new Person('bamndi', 1990);
// console.log(rohith, bandi);
// console.log(rohith instanceof Person);

// //prototype

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// rohith.calcAge();
// bandi.calcAge();

// console.log(rohith.__proto__);
// console.log(Person.prototype);
// console.log(rohith.__proto__ === Person.prototype); //true

// console.log(Person.prototype.isPrototypeOf(rohith)); //true
// console.log(Person.prototype.isPrototypeOf(bandi)); //true
// console.log(Person.prototype.isPrototypeOf(Person)); //false

// console.log(Person.__proto__);

// constructer.prototype is not the prototype of it but it the prototype of all objects created using this constructer

// Person.prototype.species = 'Homo Sapiens';

// console.log(rohith.species); // Homo Sapiens
// console.log(rohith); //no species property
// //This property is dervied from the prototype.
// //check if property is of own or derived
// console.log(rohith.hasOwnProperty('firstName')); //true
// console.log(rohith.hasOwnProperty('species')); //false

//Coding Challenge 1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.brake();
// bmw.brake();
// bmw.brake();
// bmw.accelerate();

// mercedes.brake();
// mercedes.accelerate();
// mercedes.accelerate();

// console.log(bmw, mercedes);

// const ford = new CarCl('Ford', 120);
// ford.speedUS;
// ford.speedUS = 100;

// console.log(ford);
// ford.accelerate();
// ford.accelerate();
// ford.brake();

// //parent class
// const Person = function (firstName, birthYear) {
//   //   Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   //   this.firstName = firstName;
//   //   this.birthYear = birthYear;
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// //student inherits all methods from Person like this.
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.intro = function () {
//   console.log(
//     `${this.firstName} born on ${this.birthYear} student of ${this.course}`
//   );
// };
// const rohith = new Student('rohith', 1991, 'CSE');
// rohith.intro();

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(this.speed);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(this.speed);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(mph) {
//     this.speed = mph * 1.6;
//   }
// }

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is at ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`$${this.make} is at ${this.speed}`);
// };

// const CarEV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// //Inheritance
// CarEV.prototype = Object.create(Car.prototype);

// CarEV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// //Polymorphism / Override method
// CarEV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at the speed of ${this.speed} kmph with battery level at ${this.charge}`
//   );
// };

// const tesla = new CarEV('tesla', 100, 50);
// tesla.chargeBattery(60);
// tesla.accelerate();

// tesla.brake();
