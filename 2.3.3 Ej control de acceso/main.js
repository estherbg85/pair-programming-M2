'use strict';


const btn = document.querySelector('.js_enviar');

btn.addEventListener('click', (ev) => {

    ev.preventDefault();

    const name1 = 'Maria';
    const name2 = 'Luisa';

    const usuaria = document.querySelector('.js_input').value;
    const paragraph = document.querySelector('.js_paragraph');

    if(usuaria === name1 || usuaria === name2) {

        paragraph.innerHTML = 'Bienvenida, ' + usuaria;
        
    }

    else {

        paragraph.innerHTML = 'Lo siento pero el usuario que has introducido no está registrado';
    }
})