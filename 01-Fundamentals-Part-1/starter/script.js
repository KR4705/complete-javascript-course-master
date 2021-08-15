// let js = 'amazing';
// if(js === 'amazing') alert('JS is FUN!');

// const COUNTRY = "India";
// const CONTINENT = "Asia";
// let population = 1360000000;
// console.log(COUNTRY);
// console.log(CONTINENT);
// console.log(population);

// let isIsland = false;
// const LANGUAGE = "Telugu";

// console.log(typeof isIsland);
// console.log(typeof(population));
// console.log(typeof(LANGUAGE));

// console.log(population/2);
// console.log(population + 1);
// if (population > 6000000) 
//     {
//         console.log(true)
//     }  
// else{
//         console.log(false
//     )
// };
// console.log(COUNTRY+" is in " + CONTINENT+ ", and its "+ population+" speak " + LANGUAGE);

//Challenge 1
//Test1
// const markMass = 78;
// const markHeight= 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;


//test2
// const markMass = 95;
// const markHeight= 1.88;

// const johnMass = 85;
// const johnHeight = 1.76;


// const markBMI = markMass/markHeight ** 2;
// const johnBMI = johnMass/johnHeight ** 2;

// const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);


// //Challenge 2
// if(markHigherBMI){
//     console.log(`Mark's BMI is higher than John's!`)
// } else {
//     console.log(`John's BMI is higher than Mark's!`)
// }

// if(markHigherBMI){
//     console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`)
// } else {
//     console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`)
// }


//coding challenge 3
// const dolphinsRound1 = 97;
// const dolphinsRound2 = 112;
// const dolphinsRound3 = 101;

// const koalasRound1 = 109;
// const koalasRound2 = 95;
// const koalasRound3 = 106;

// const dolphinsScore = (dolphinsRound1 + dolphinsRound2 + dolphinsRound3)/3;
// const koalasScore = (koalasRound1 + koalasRound2 + koalasRound3)/3;

// bonus 1
// if (dolphinsScore > koalasScore && (dolphinsRound1 >= 100 || dolphinsRound2 >= 100 || dolphinsRound3 >= 100)) {
//     console.log(`Dolphins win with an average score of ${dolphinsScore}`)
// } else if(koalasScore > dolphinsScore && (koalasRound1 >= 100 || koalasRound2 >= 100 || koalasRound3 >= 100)){
//     console.log(`Koalas win with an average score of ${koalasScore}`)
// } else{
//     console.log(`it was a draw with same score of ${dolphinsScore}`)
// }

//bonus 2 Misinterpretted the question but logically feels right!
// if (dolphinsScore > koalasScore && (dolphinsRound1 >= 100 || dolphinsRound2 >= 100 || dolphinsRound3 >= 100)) {
//     console.log(`Dolphins win with an average score of ${dolphinsScore}`)
// } else if(koalasScore > dolphinsScore && (koalasRound1 >= 100 || koalasRound2 >= 100 || koalasRound3 >= 100)){
//     console.log(`Koalas win with an average score of ${koalasScore}`)
// } else if((dolphinsRound1 >= 100 || dolphinsRound2 >= 100 || dolphinsRound3 >= 100) && (koalasRound1 >= 100 || koalasRound2 >= 100 || koalasRound3 >= 100)){
//     console.log(`it was a draw with same score of ${dolphinsScore}`)
// } else{
//     console.log(`no team wins as there was no score greater than 100!!`)
// }


//coding challenge 4

// const bill = 430;
// const tip = bill > 50 && bill < 300 ? bill*15/100 : bill*20/100;
// console.log(tip);