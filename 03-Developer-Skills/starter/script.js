// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//input
//data 1
// const forecast = [71, 21, 23];

const forecast = [12, 5, -5, 0, 4];

let printString = '';
for (let i = 0; i < forecast.length; i++) {
  printString += `${forecast[i]}ºC in ${i + 1}days ... `;
}

console.log(printString);
