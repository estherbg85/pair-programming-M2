'use strict';

const dia = '24';
const año = '365';
const btn = document.querySelector('.js_btn');


btn.addEventListener('click', (ev) => {

    ev.preventDefault();

    const edad = document.querySelector('.js_edad').value;

    const total = (dia * año * edad);

    const totalHoras = document.querySelector('.js_total');

totalHoras.innerHTML = total;


console.log(total);

});


