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

// let photos = document.querySelectorAll(".cover");
// let select = document.querySelector("#photos");

// photos[0].dataset.types = "photo";
// photos[1].dataset.types = "photo";

// photos[2].dataset.types = "art";
// photos[3].dataset.types = "art";

// photos[4].dataset.types = "art";
// photos[5].dataset.types = "art";

// photos[6].dataset.types = "music";
// photos[7].dataset.types = "music";

// // console.log(photos);
// console.log(photos[0]);
// console.log(photos[1]);

// console.log(select.hasAttribute("title"));

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

// let image = {
//   url: "https://picsum.photos/id/311/300/300",
//   category: "photo",
//   id: 1,
//   title: "this is a photo",
// };

///// -> best practice

let images = [
  {
    url: "https://picsum.photos/id/311/300/300",
    category: "photo",
    id: 1,
    title: "this is a photo",
  },
  {
    url: "https://picsum.photos/id/312/300/300",
    category: "photo",
    id: 2,
    title: "this is a photo",
  },
  {
    url: "https://picsum.photos/id/313/300/300",
    category: "photo",
    id: 3,
    title: "this is a photo",
  },
  {
    url: "https://picsum.photos/id/313/300/300",
    category: "art",
    id: 4,
    title: "this is a photo",
  },
  {
    url: "https://picsum.photos/id/314/300/300",
    category: "art",
    id: 5,
    title: "this is a photo",
  },
  {
    url: "https://picsum.photos/id/315/300/300",
    category: "art",
    id: 6,
    title: "this is a photo",
  },
  {
    url: "https://picsum.photos/id/316/300/300",
    category: "tech",
    id: 7,
    title: "this is a photo",
  },
  {
    url: "https://picsum.photos/id/317/300/300",
    category: "tech",
    id: 8,
    title: "this is a photo",
  },
  {
    url: "https://picsum.photos/id/318/300/300",
    category: "tech",
    id: 9,
    title: "this is a photo",
  },
  {
    url: "https://picsum.photos/id/319/300/300",
    category: "sport",
    id: 10,
    title: "this is a photo",
  },
];

for (let i = 0; i < images.length; i++) {
  console.log(images[i]);
}

let gallery = document.querySelector(".gallery");

function addElement(id) {
  let img = document.createElement("img");
  img.setAttribute("src", `https:picsum.photos/id/3${id}/300/300`);
  img.setAttribute("alt", `photo ${1 + id}`);
  gallery.append(img);
}

// for (let i = 0; i < 100; i++) {
//   addElement(i);
// }
