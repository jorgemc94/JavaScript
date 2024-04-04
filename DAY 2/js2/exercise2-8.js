//8-. Genere un número aleatorio entre 50 y 100 inclusive.

let numMax = 100;
let numMin = 50;

let random2 = (Math.floor(Math.random() * (numMax - numMin) + numMin)); 
//se pone + numMin para empezar a contar desde el numMin que es 50 en este caso
console.log (random2)