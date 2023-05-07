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

// let arr = [];

// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr[0] = "javascript";
// arr[1] = "php";
// arr[2] = "nodejs";
// arr[3] = "vuejs";

// delete arr[2];

// arr.unshift("angular"); // boshidan qo'shadi

// arr.shift(); // boshidan o'chiradi

// arr.push("java", "laravel"); // oxiridan qo'shadi

// arr.pop(); // oxiridan o'chiradi

// console.log(arr);

// let array3 = array2.concat(arr); // ikki arrayni bir-birga qo'shadi

// let array4 = array2.concat(arr).concat(array2).concat("delphi", "c++", "xml");

// console.log(array4);
// console.log(array3);

// slice --->> arraydan slice(indexdan, indexgacha) tartibida nusxa oladi, asosiy arrayga ta'sir qilmaydi

// let arrCopy = array2.slice(0, 7);

// console.log(arrCopy);

// splice --->> (indexdan, n ta) tartibida arraydan kesib oladi, asosiy arrayga ta'sir qiladi

// console.log(array2.splice(0, 6));
// console.log(array2);

// indexOf // element indexini aniqlaydi

// console.log(array2.indexOf(10));

// includes --->> arrayda bor yoki yo'qligini tekshiradi

// console.log(array2.includes('php'));
// console.log(array2.includes(4));

// join() --->> array to string

// console.log(array2.join(" ")); // tirnoqlar orasiga yozilgan amalni stringlar orasiga qo'yib beradi

// lenght --->> array elementlari sonini aniqlaydi

// console.log(array2.length);

//// ----->>>> String

let str = "Javascript";

console.log(str.toLowerCase()); // kichik harf bilan

console.log(str.toUpperCase()); // katta harf bilan

console.log(str.length); // agregat funksiya - uzunligini qaytaradi

