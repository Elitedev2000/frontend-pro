"use strict";

let a = 24;
// -->>> logical and - &&, logical or - ||

// || - uchun bitta true kifoya
// && - uchun false kifoya

let ball = prompt("Balni kiriting:");
let usd = prompt("Pul miqdorini kiriting:");
let ielts = prompt("IELTS darajangizni kiriting:");

if (ball >= 160 || (ielts >= 5 && usd >= 5000)) {
  console.log("Congratulations!");
} else {
  console.log("No successfull");
}
