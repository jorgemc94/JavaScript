//4-. Tener un input de número que permita especificar un número de valores que obtener de la API

const exercise4 = document.getElementById('exercise4');
const content4 = document.getElementById('exercise4Content');


//Titulo del ejercicio
const title4 = document.createElement('h4')
title4.innerText = '4-. Tener un input de número que permita especificar un número de valores que obtener de la API'
exercise4.appendChild(title4)

const inputNumber = document.createElement('input');
inputNumber.placeholder = 'Introduce un numero';
inputNumber.addEventListener('change', (event) => {
let userInput = event.target.value;
if (userInput === '')
    userInput = 20;
if (!parseInt(userInput)) {
    alert('Introduce un número')
} else {
let urlNew = `https://fakerapi.it/api/v1/users?_quantity=${userInput}&_gender=male`
console.log(urlNew)
fetchData(urlNew, 'exercise4Content') // llamamos a la funcion fetchData con el div 'exercise4Content'
}

})
exercise4.appendChild(inputNumber);




