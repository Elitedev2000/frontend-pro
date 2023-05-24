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

////// hasAttribute -> atribut bor yoki yo'qligini tekshiradi

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
let select = document.querySelector("#photos");

photos[0].dataset.types = "photo";
photos[1].dataset.types = "photo";

photos[2].dataset.types = "art";
photos[3].dataset.types = "art";

photos[4].dataset.types = "art";
photos[5].dataset.types = "art";

photos[6].dataset.types = "music";
photos[7].dataset.types = "music";

// console.log(photos);
console.log(photos[0]);
console.log(photos[1]);

console.log(select.hasAttribute("title"));

////// dynamic -> ma'lumotlarni oson va ozgina kod bilan yozish

// createElement -> dinamik element yasaydi
// append ->  elementni oxiriga qo'shadi
// prepend -> elementni boshiga qo'shadi

// let gallery = document.querySelector(".gallery");

// let img = document.createElement("img");

// img.setAttribute("src", "https://picsum.photos/id/311/300/300");

// img.setAttribute("alt", "photo1");

// gallery.append(img);
// gallery.prepend(img);

///// -> best practice

let gallery = document.querySelector(".gallery");

function addElement(id) {
    console.log(id);
  let img = document.createElement("img");
  img.setAttribute("src", "https://picsum.photos/id/310/300/300");
  img.setAttribute("alt", "photo 1");
  gallery.append(img);
}

for (let i = 0; i < 100; i++) {
  addElement(i);
}
