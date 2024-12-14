'use strict';


// Inflar las notas

const marks = [5, 4, 6, 7, 9];

const inflatedMarks = marks.map((mark) => mark + 1);

console.log(inflatedMarks);


// Saludar es de buena educación

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada']; 

const greetingNames = names.map((name) => `Bienvenida, ${name}` );

console.log(greetingNames);


// Gracias por confiar en nosotros

const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false },
];


const greetings = users.map((oneUser) => {
    if(oneUser.isPremium === true) {
        return `Bienvenida, ${oneUser.name}. Gracias por confiar en nosotras.`;

    }
    else {
        return `Bienvenida, ${oneUser.name}.`;

    }

});

console.log(greetings);


/* Esta es la explicación que nos ha dado Iván de que todos los métodos funcionales de array (como map) llevan implícito un returm

const greetings2implicito = users.map( oneUser => `Bienvenida, ${oneUser.name}` );
const greetings2explicito = users.map((oneUser) => { return `Bienvenida, ${oneUser.name}`; } );

*/