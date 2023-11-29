"use strict"
//1.--------------pirma uzduotis------------

// let skaicius = 0;
// do {
//   skaicius = parseInt(prompt(`Iveskite skaiciu`));
//   if (skaicius >= 0) {
//     continue
//   } else {
//     break;
//   }
// } while (skaicius >= 0);
// console.log(skaicius)

//2.--------------antra uzduotis------------

// for (let c = 1; c<=100; c++){ 
//   if (c%3==0){
//     continue;
//   }
//   console.log(c)
// }

//3.--------------trecia uzduotis------------

// for (let s=2; s<=12; s++){
//   console.log(s**3)
// }

//4.--------------ketvirta uzduotis------------

// const persons = {
//   jonas: 30,
//   petras: 26,
//   ona: 45,
//   maryte: 36,
//   antanas: 77,
//   'teta zita': 86,
// }
// for (let i in persons){
//     console.log(i, `amzius yra`, persons[i])
// }

//5.--------------penkta uzduotis------------

// const persona = {
//   jonas: 30,
//   petras: 26,
//   ona: 45,
//   maryte: 36,
//   antanas: 77,
//   'teta zita': 86,
// }
// let suma=0
// for (let i in persona){
//     suma++
// }
// console.log(suma, `yra.`)

//6.--------------sesta uzduotis------------

// let sakinys = prompt(`iveskite sakini`)
// let m = 'zodis'
// for (let i of sakinys){
//     console.log(i)
// }

//7.--------------septinta uzduotis------------

// let sakinys = prompt(`iveskite sakini`)
// let suma =0
// for (let i of sakinys){
//     suma++
// }
// console.log(suma, sakinys.length)

//8.--------------astunta uzduotis------------

// let c = 20
// while (c<=50){
//     if (c%2==0){
//     console.log(c)
//   }
//   c++
// }

//9.--------------devinta uzduotis------------

// let skaicius = 0;
// do {
//   skaicius = parseInt(prompt(`Iveskite skaiciu`));
//   if (skaicius >= 0) {
//     continue
//   } 
//    else {
//     alert(`ivedete neigiama skaiciu`)
//     break;
//   }
// } while (skaicius >= 0);

//10.--------------devinta uzduotis------------

// let suma = 0
// let sk = 0
// do {
//     sk = parseInt(prompt(`iveskite skaiciu`))
//     if (sk > 0) {
//         suma+=sk
//          continue
//     } 
// }while(sk!=0)
// console.log(suma)