//4-. Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?

const num4 = prompt('Introduce un número por teclado: ')

num4 % 2 === 0
? console.log(num4 + ' es un número par.')
: console.log(num4 + ' es un número impar.')