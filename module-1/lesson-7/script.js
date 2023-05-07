"use strict";

// function test() {
//   console.log(this);
// }
// test();

// const app = function () {
//   console.log(this);
// };
// app();

// const app = () => {
//   console.log(this);
// };

// app();

//// ---->>> this

// const device = {
//   name: "Iphone 14",
//   price: 1250,
//   color: "deep purple",
//   memory: { cpu: 16, cd: 256 },
//   camera: [12, 16, 48, 20],

//   about: function () {
//     // return `Device name: ${this.name}`;
//     return this;
//   },
// };

// let iphone = device.about();

// console.log(iphone);

//// ---->>>> JSON (avval XML)  // ma'lumot almashinish uchun foydalaniladi

// let json = {
//   alert: "success",
//   number: "2233",
//   age: "32",
// };

// const newJSON = JSON.stringify(json); // jsonga aylantirish

// console.log(newJSON);

// const newJsonParse = JSON.parse(newJSON); // jsondan asl holiga qaytarish

// console.log(newJsonParse);

///// ------>>>>> DOM

// let title = document.getElementById("text");

// let title = document.getElementsByClassName("text"); // HTML Collection deb ataladi

// let title = document.getElementsByTagName("h1");

// let title = document.getElementsByTagName("text");

// let title = document.querySelector("#text");

// let title = document.querySelector("h1");

// let title = document.querySelectorAll("h1");

let title = document.querySelector(".text");

// console.log(title.parentNode); // body
// console.log(title.parentNode.parentNode); // html
// console.log(title.parentNode.parentNode.parentNode); // html document
// console.log(title.parentNode.parentNode.parentNode.parentNode); // null

// console.log(title.parentElement); // parentNode dek ishlaydi

// console.log(title.textContent); // document va html matnlarini ko'rsatadi

// console.log(title.innerHTML); // document va html taglarini ham qo'shib ko'rsatadi

// console.log(title.previousElementSibling); // o'zidan avvalgi element - tagni ko'rsatadi

// console.log(title.nextElementSibling); // o'zidan keyingi element - tagni ko'rsatadi

console.log((title.nextElementSibling.style.background = "red"));
