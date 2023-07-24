"use strict";

let a = 24;

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
}
