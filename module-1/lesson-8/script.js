"use strict";

let text = document.querySelector(".text"),
  input = document.querySelector("input"),
  btn = document.querySelector(".btn");

// nodeName
// tagName
// nodeType
// className\

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

text.style.cssText = "background-color: aqua; color:red; margin:30px";

////// onClick, onChange, OnIn

input.oninput = function () {
  console.log(input.value);
};

console.log(text.style);
