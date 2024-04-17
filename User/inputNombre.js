//3-. Crear un input que permita filtrar por nombre de la persona

const exercise3 = document.getElementById('exercise3');

const title3 = document.createElement('h4');
title3.innerText = '3-. Crear un input que permita filtrar por nombre de la persona';
exercise3.appendChild(title3);

//Creamos el input
const inputName = document.createElement('input');
inputName.placeholder = 'Introduce un nombre';
exercise3.appendChild(inputName);