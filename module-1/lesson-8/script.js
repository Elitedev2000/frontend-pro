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

function setInput() {
  //   input.setAttribute("type", "password");
  input.setAttribute("placeholer", "enter password");
}

// inline -> attribute

btn.onclick = setInput;

// btn.onclick = () => {
//   setInput();
// }; //------>>> callback function
