'use strict';



const btn = document.querySelector('.js_btn');
const paragraph = document.querySelector('.js_paragraph');




btn.addEventListener('click', (ev) => {
    ev.preventDefault();

    // Si queremos que se siga acumulando como en Adatask las tareas
    const favoriteFilms = [];

    const film1 = document.querySelector('.js_film1').value;
    favoriteFilms.push(film1);

    const film2 = document.querySelector('.js_film2').value;
    favoriteFilms.push(film2);

    paragraph.innerHTML = '';

    for( const movie of favoriteFilms) {
       
        

        //let movie = film1; Esto es justo el trabajo del bucle for-of

     
        paragraph.innerHTML += `<p>A mi tambien me encanta ${movie}.</p>`;

       

        
    }

});