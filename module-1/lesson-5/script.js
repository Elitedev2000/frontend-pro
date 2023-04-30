"use strict";

// let a = 24;
// -->>> logical and - &&, logical or - ||

// || - uchun bitta true kifoya
// && - uchun false kifoya

// let ball = +prompt("Balni kiriting:");
// let usd = +prompt("Pul miqdorini kiriting:");
// let ielts = +prompt("IELTS darajangizni kiriting:");

// if (ball >= 160 || (ielts >= 5 && usd >= 5000)) {
//   console.log("Congratulations!");
// } else {
//   console.log("No successfull");
// }

// ---->>>> Ternary Operators

// 3 >= 2 < 6 ? console.log("6 katta") : console.log("3 katta");

// let isBuy = false;

// if (isBuy) {
//   console.log("ok");
// } else {
//   console.log("no ok");
// }

// isBuy ? console.log("ha") : console.log("yoq");

// let day = 4;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("not found");
// }

// --->>>>>>

// While, Do while, For

// While

// let n = 10;

// while (n <= 100) {
//   if (n % 2 == 0) {
//     console.log(n);
//   }
// }

// Do While

// let n = 1;

// do {
//   n++;
//   console.log(n);
// } while (n < 10);

// For

// for (let n = 1; n <= 20; n++) {
//   console.log(n);
// }

// ----->>>>> FUNCTION

// --->> Function Declaration

// camelCase --
// snake_case --
// PascalCase

// template literal

// function sayMyName(a, b) {
//   console.log("Umidjon");
//   console.log(`${a}ning kasbi ${b}`); // ES6
// }

// sayMyName("Murodjon", "UX Designer");

// --->> Function Expression (yuqorida chaqirib bo'lmaydi)

// const calc = function (a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };

// const calc = function (a, b, c) {
//   return a + b + c;
// };

// calc("Men", "Sen", "Biz");

// const letter = calc;
// const test = letter;

// letter("abbo", "beko", "coli");

// --->> Arrow Function (yuqorida chaqirib bo'lmaydi)

//ES6

// const message = (a, b, c) => {
//   console.log(a, b, c);
// };

// const message = (a, b, c) => console.log(a, b, c);

// message("uy", "pul", "oy");

// const message = (a, b, c) => a + b + c;

// console.log(message(2, 2, 4));

// const app = message;

// app("yur", "tur", "bor");

// default parameter

// const app = (a = "Vue") => {
//   console.log(a);
// };
// app();
