"use strict";

//// ---->>> this

const device = {
  name: "Iphone 14",
  price: 1250,
  color: "deep purple",
  memory: { cpu: 16, cd: 256 },
  camera: [12, 16, 48, 20],

  about: function () {
    return `Device name: ${this.name}`;
  },
};

let iphone = device.about();

console.log(iphone);
