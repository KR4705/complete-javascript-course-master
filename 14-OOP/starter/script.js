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
//     this.speed = mph * 1.6;// ES6 Classes

// Class expression
// const PersonCl = class {}

// PersonCl.hey();

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

////////////////////////////////////////////////////////////////////////////////////////////////
// // Class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter White', 1965);

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I am ${2037 - this.birthYear} but as a student I feel younger`
//     );
//   }
// }

// const rohith = new StudentCl('Rohith Sreeramdas', 1991, 'Computer Science');
// console.log(rohith);
// rohith.introduce();
// rohith.calcAge();

////////////////////////////////////////////////////////////////////////////
//Inheritance using prototype(object.create)

// const PersonProto = {
//   calcAge() {
//     return 2037 - this.birthYear;
//   },

//   init(fullname, birthYear) {
//     this.fullname = fullname;
//     this.birthYear = birthYear;
//   },
// };

// //creating person
// const bandi = Object.create(PersonProto);
// console.log(bandi);
// const StudentProto = Object.create(PersonProto); // This will make StudentProto inherit from PersonProto
// StudentProto.init = function (firstname, birthYear, course) {
//   PersonProto.init.call(this, firstname, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.fullName} and I study ${this.course}`);
// };

// const rohith = Object.create(StudentProto);

// rohith.init('rohith', 1991, 'CSE');
// console.log(rohith);
// console.log(rohith.calcAge());
// // console.log(rohith.toString());

/////////////////////////CC4

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
    // return this;
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(mph) {
    this.speed = mph * 1.6; // ES6 Classes
  }
}

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

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  //Polymorphism / Override method
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at the speed of ${
        this.speed
      } kmph with battery level at ${this.#charge}`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian.chargeBattery(60).accelerate().accelerate().brake().speedUS);
