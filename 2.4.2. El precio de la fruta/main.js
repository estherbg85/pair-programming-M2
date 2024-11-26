'use strict';

const kiwis = 5;
const peras = 2;
const uvas = 4;

const total = ((kiwis*2) + (peras*3) + (uvas/2));

const totalCompra = document.querySelector('.js_total');

totalCompra.innerHTML = total;

console.log(total);

