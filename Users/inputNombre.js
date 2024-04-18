//3-. Crear un input que permita filtrar por nombre de la persona

const exercise3 = document.getElementById('exercise3');

//Titulo para el ejercicio 3
const title3 = document.createElement('h4');
title3.innerText = '3-. Crear un input que permita filtrar por nombre de la persona';
exercise3.appendChild(title3);

//Creamos el input
const inputName = document.createElement('input'); // creamos el input
const createSearchInputName = (userList) => { //Creamos el userList y lo sacamos fuera para que no se repita
inputName.placeholder = 'Introduce un nombre'; // añadimos el placeholder
inputName.addEventListener('change',(event) => { //añadimos el evento de escucha
    let value = event.target.value; // variable que guarda el valor del evento
    // escribimos en HTML el resultado de filtar nuestro userList por nombre cuando incluye el introducido
    writeTextInHtml(userList.filter(user => user.firstname.includes(value))) 

})
exercise3.appendChild(inputName); 
}
