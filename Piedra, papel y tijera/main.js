'use strict';

const submit = document.querySelector('.js_submit');
const startGame = document.querySelector('.js_startGame');

submit.addEventListener('click', (ev) => {
    ev.preventDefault();

const jugada = document.querySelector('.js_jugada').value;

});

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  }