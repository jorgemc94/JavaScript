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
if (!parseInt(userInput)) {
    alert('Introduce un número')
} else {
let urlSplit = url.split('=');
let urlReplace = urlSplit[1].replace('20',userInput)
let urlNew = urlSplit[0] + '=' + urlReplace + '=' + urlSplit[2]
console.log(urlNew)
}

})
exercise4.appendChild(inputNumber);




