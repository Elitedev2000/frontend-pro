// document.write("Hello, world!");

// console.log("Umidjon");
// console.warn("Internet is unsafe");
// console.error("Error 404");
// console.info("Success");
// console.table({ id: 1, name: "Umidjon", age: "25", job: "Coder" });

// console.log(document.getElementById('text'));
// document.getElementById('text').innerHTML = "<i>JavaScript</i>";

/*

katta izoh uchun

*/

// alert('Hello world!');

// confirm('Sayt sizga yoqdimi?');

// prompt("How are you?");

/*

console.log('1'+15-20);    // 95     
console.log(11+'11');      // 1111  ---> + string bilan kelsa stringga o'tib qoladi 
console.log(20+'20');      // 2020  ---> + string bilan kelsa stringga o'tib qoladi
console.log('200'-50);     // 150   ---> number - boshqa amallar bilan
console.log('200'/50);     // 4     ---> number - boshqa amallar bilan
console.log(100*'3');      // 300   ---> number - boshqa amallar bilan
console.log(100*'');       // 0     ---> truthy va falthy amallaridan 0 qiymat uchun falthy qaytaradi

*/

// const ism = "muhriddin"; // declare
// ism = "husniddin"; // assign
// const ism = "sardor"; // re declare

// block scope - global ishlashni cheklaydi, var mustasno

// {
//   let ism = "bobur";
// }

// console.log(ism);

// ------------>>>>> DATA TYPES

// --->>> 1
// String

// let isName = "JavaScript";
// let str = "Vue.js";
// let framework = `9999`;

// --->>> 2

// Number

// let age = 25;
// let num = 0.0001;
// let randoms = -888;

// console.log(randoms);

// --->>> 3

// Boolean
//         --- true = 1
//         --- false = 0

// console.log(11 > 10);
// console.log(true + true);

// --->>> 4

// Undefined

// let isIOS;

// console.log(isIOS);

// --->>> 5

// null

// BigInteger

// bigNumber = BigInt(3459475981749423462348469789419);
// console.log(bigNumber);

// Symbol  - asosan obyektlar bilan ishlatiladi

let isSymbol = Symbol("frontend");
let isString = Symbol("frontend");

console.log(isSymbol === isString);
