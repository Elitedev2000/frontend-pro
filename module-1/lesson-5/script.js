"use strict";

/*

// --- logical and &&, logical or ||

let ball = +prompt("ballni kiriting:");
let usd = +prompt("kontraktni kiriting:");
let ielts = +prompt("IELTS darajangizni kiriting:");

// || -> true
// && -> false

if ((ball >= 150) || (ielts >= 5 && usd >= 5000)) {
  console.log("Congratulation!");
} else {
  console.log("No Successful");
} */

// ternary oparator

// 1 > 2 ? console.log("ha") : console.log("yo'q");

// 12 >= 13 ? console.log("ha") : console.log("ok");

// let isBuy = true;

// if (isBuy) {
//   console.log("successfull");
// } else {
//   console.log("no successfull");
// }

// isBuy ? console.log('ha') : console.log('ok ');

// 4 === 3 ? alert("success") : alert("no success");

// let day = 4;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Friday");
//     break;

//   default:
//     console.log("not found");
// }

// while, do while, for

// let n = 10;

// while (n < 100) {
//   if (n % 2 == 0) {
//     console.log(n);
//   }
//   n++;
// }

// do {
//   n++;
//   console.log(n);
// } while (n < 10);

// for

// for (let n = 0; n < 2; n++) {
//   console.log(n);
// }

// ---> function declaration

// function sayMyName(a, b, c) {
//   console.log("Umidjon" + c);
//   console.log(`${a}ning kasbi ${b}`); // ES6
// }

// sayMyName('Samandar', 'Programmer', 'web')

// function counter(a, b) {
//   return 123 / a;
// }

// console.log(counter(10));

// ---> function expression

// const calc = function (a, b, c) {
//   return a + b + c;
// };

// console.log(calc(12, 12, 13));

// calc("java", "vue", "nuxt");

// const letter = calc;

// letter("olma", "anor", "nok");

// const test = letter;

// test("A", "B", "C");

// ---> arrow function

// const message = (a, b, c) => {
//   return a + b + c;
// };

// const message = (a, b, c) => a + b + c; // bir qatorga yozilgda return shart emas

// console.log(message("ab", "bb", "cb"));

// const app = message;
// app("r", "t", "o");

// const app = () => "Hello Vue.js";

// console.log(app());

//---> default parameter

const app = (a = "Vue") => {
  console.log(a);
};
app("React");
