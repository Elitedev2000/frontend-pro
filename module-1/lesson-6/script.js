"use strict";

// let types = prompt("amalni kiriting");
// let num1 = +prompt("n1");
// let num2 = +prompt("n2");

// let calc = {
//   add: function (a, b) {
//     if (a && b) {
//       return a + b;
//     } else {
//       return "Qiymat xato yoki kiritlmagan!";
//     }
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   devision: function (a, b) {
//     return a / b;
//   },
//   multiply: function (a, b) {
//     return a * b;
//   },
// };

// let result = calc.add(12, 10);

// let result = calc[types](num1, num2);

// console.log(result);
// console.log(calc.add(11));
// console.log(calc.devision(12, 4));
// console.log(calc.multiply(10, 4));

// ----->>>> Object

// literal object creation

// let person = {
//   isName: "Bobur",
//   age: 20,
//   isStudent: true,
// };

// console.log(person);

// // new object()

// const brand = new Object({ isNam: "Lexus" });

// console.log(brand);

// // object.create()

// let newObj = Object.create({});

// newObj.age = 24;
// console.log(newObj);

// // Object yaratish boshqa usullari  --- constructor, class, object.assign, JSON.stringify, JSON.parse

// // dot nation

// console.log(person.isName);

// // bracket nation

// console.log(person["age"]);

// let selectLang = prompt("Select language");

// let language = {
//   uz: {
//     Home: "Bosh sahifa",
//     About: "Biz haqimizda",
//   },
//   en: {
//     Home: "Home",
//     About: "About",
//   },
// };

// console.log(language[selectLang]);

// console.log(Math);

// Object -->> method: keys, value, entries, fromEntries

// let obj1 = {
//   key1: "value1",
//   key2: "valu2",
//   key3: "value3",
// };

// let objKeys = Object.keys(obj1);
// let objValues = Object.values(obj1);
// let objEntries = Object.entries(obj1);

// let reverseObj = Object.fromEntries(objEntries);

// console.log(reverseObj);

// console.log(objKeys);
// console.log(objValues);
// console.log(objEntries);

// console.log(objEntries.flat(2));

// --------->>>>>>> Array

// literal creates an array

// let week = [
//   "Monday",
//   "Tuesday",
//   "wednesday",
//   "Thursday",
//   "Friday",
//   [
//     [
//       [
//         [
//           [
//             "Monday",
//             "Tuesday",
//             "wednesday",
//             "Thursday",
//             "Friday",
//             [[["Monday", "Tuesday", "wednesday", "Thursday", "Friday"]]],
//           ],
//         ],
//       ],
//     ],
//   ],
// ];

// console.log(week[1]);
// console.log(week.flat(4));

// new Array

// let week = new Array("Monday", "Tuesday", "wednesday", "Thursday", "Friday");

// console.log(week);

let arr = [];

// arr[0] = "javascript";
// arr[1] = "php";
// arr[2] = "nodejs";
// arr[3] = "vuejs";

// delete arr[2];

arr.unshift("angular"); // boshidan qo'shadi

arr.shift(); // boshidan o'chiradi

arr.push("java", "laravel"); // oxiridan qo'shadi

arr.pop(); // oxiridan o'chiradi

console.log(arr);
