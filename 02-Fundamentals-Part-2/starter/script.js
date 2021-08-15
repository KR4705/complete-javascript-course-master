`use strict`;
// Fundamentals 2
//coding challenge 1
// arrow function for averaga

//score

//function is const not let
// const calcAverage = (score1,score2,score3) => (score1+ score2 + score3)/3;
// let avgDolphins = calcAverage(44,23,71);
// console.log(avgDolphins);
// let avgKoalas = calcAverage(65,54,49);
// console.log(avgKoalas);

// function checkWinner(avgDolphins,avgKoalas){
//     if(avgDolphins/2 >= avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas/2 >= avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log(`nobody wins`);
//     }
// }

// checkWinner(avgDolphins,avgKoalas);

// //test data 2
// avgDolphins = calcAverage(85,54,41);
// console.log(avgDolphins);
// avgKoalas = calcAverage(23,34,27);
// console.log(avgKoalas);
// checkWinner(avgDolphins,avgKoalas);

// test data 2 output : 
// 60
// script.js:19 28
// script.js:23 Dolphins win (60 vs 28)

// note careful while initiating function as non passing of parameters does not trigger error.

//output:
// 46
// script.js:13 56
// script.js:21 nobody wins
// script.js:34 60
// script.js:36 28
// script.js:17 Dolphins win (60 vs 28)


//coding challenge 2

//const calcTip = bill => bill > 50 && bill < 300 ? 15*bill/100 : 20*bill/100;

// console.log(calcTip(100));

// bills = new Array(125,555,44);
// console.log(bills);
// tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
// console.log(tips);
// total = new Array(bills[0] + tips[0], bills[1] + tips[1] , bills[2] + tips[2]);
// console.log(total);

//coding challenge 3
// const mark = {
//     name : `Mark Miller`,
//     mass : 78,
//     height : 1.69,
//     calcBMI : function(){
//         this.BMI = this.mass/(this.height ** 2);
//         return this.BMI;
//     },
// }

// const john = {
//     name : `John Smith`,
//     mass : 92,
//     height : 1.95,
//     calcBMI : function(){
//         this.BMI = this.mass/(this.height ** 2)
//         return this.BMI
//     }
// }


// console.log(mark.calcBMI());
// console.log(mark.BMI);
// console.log(john.calcBMI());
// console.log(john.BMI);

// console.log(
//     `${john.BMI > mark.BMI ? john.name:mark.name}'s BMI (${john.BMI > mark.BMI ? john.BMI:mark.BMI}) is higher than ${john.BMI > mark.BMI ? mark.name:john.name}'s (${john.BMI > mark.BMI ? mark.BMI:john.BMI})`
// )

//note method of object have to be called using () otherwise JS expects a property and it will be undefined.


//coding challenge 4
//task1

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const total = [];

const calcTip = bill => bill > 50 && bill < 300 ? 15*bill/100 : 20*bill/100;
for (let i = 0;i < bills.length ;i++){
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(total);

function calcAverage(a){
    let avg = 0;
        for(let i = 0;i<a.length;i++){
        avg = (avg * i + a[i])/(i+1)
    };
    return avg;
}

console.log(calcAverage(bills));
console.log(calcAverage(tips));
