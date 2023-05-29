"use strict";


let wrapper = document.querySelector('.wrapper');




for (let i = 0; i < 20; i++) {
    let templateTag = document.querySelector('#template');
    console.log(templateTag);
    let copy = templateTag.content.cloneNode(true);
    wrapper.append(copy)

}