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

console.log(window.document);