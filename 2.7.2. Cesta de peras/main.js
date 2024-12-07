'use strict';

let cesta = {

max: 50,
min: 10,
current: 25,
initial: 15,

sacarUna: () => {
if (cesta.current > cesta.min) {

cesta.current-=1;
}
},

sacarVarias: (cuantas) => {  // cuantas = 13
    if( cesta.current-cuantas >= cesta.min) {
cesta.current -= cuantas;
    }
}

añadirUna: () => {
    if (cesta.current <= cesta.max) {
        cesta.current+=1;
    }

        
}
};


// {max: 50, min: 10, current: 25, initial: 15, sacarUna: ƒ(), …}
cesta.sacarVarias(2);
// {max: 50, min: 10, current: 23, initial: 15, sacarUna: ƒ(), …}
console.log(cesta);

cesta.sacarVarias(13);
// {max: 50, min: 10, current: 10, initial: 15, sacarUna: ƒ(), …}
console.log(cesta);

cesta.sacarUna(1);

console.log(cesta);

cesta.sacarUna();

console.log(cesta);



