"use strict";

// let text = document.querySelector(".text"),
//   input = document.querySelector("input"),
//   btn = document.querySelector(".btn");

// nodeName
// tagName
// nodeType
// className\

///////////// ----->>> CSSStyleDeclaration -> har qanday elementda mavjud bo'sh qiymatlar obyekti

// getAttribute -> har qanday atribut qiymatini olib bera oladi

////// setAttribute('nameAttr', value) ->  har qanday atributga qiymat tayinlaydi

////// console.log(text[0].nodeType);

// console.log(text.getAttribute("name"));

// function setInput() {
//   //   input.setAttribute("type", "password");
//   input.setAttribute("placeholer", "enter password");
//   console.log(input.value);
// }

// inline -> attribute

// btn.onclick = setInput;

// btn.onclick = () => {
//   setInput();
// }; //------>>> callback function

// console.log((text.style.backgroundColor = "aqua"));
// console.log(text.style);
// text.style.color = "red";

// text.style.cssText = "background-color: aqua; color:red; margin:30px";

// ////// onClick, onChange, OnIn

// input.oninput = function () {
//   console.log(input.value);

//   if (input.value.trim().length > 6) {
//     input.style.border = "4px solid green";
//   } else {
//     input.style.border = "4px solid red";
//   }
// };

// console.log(text.style);

/////// dataSet stributi -> ma'lumotlarni unikal qilish uchun kerak

let photos = document.querySelectorAll(".cover");

photos[0].dataset.photo = "photo";

// console.log(photos);
console.log(photos[0]);
