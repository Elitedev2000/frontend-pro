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

let day = 4;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Friday");
    break;

  default:
    console.log("not found");
}
