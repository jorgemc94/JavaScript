//3-. Crear un input que permita filtrar por nombre de la persona

const exercise3 = document.getElementById('exercise3');

const title3 = document.createElement('h4');
title3.innerText = '3-. Crear un input que permita filtrar por nombre de la persona';
exercise3.appendChild(title3);

//Creamos el input
const createSearchInputName = (userList) => { //Creamos una funcion para 
const inputName = document.createElement('input');
inputName.placeholder = 'Introduce un nombre';
inputName.addEventListener('change',(event) => {
    let value = event.target.value;
    // escribimos en HTML el resultado de filtar nuestro userList por nombre cuando incluye el introducido
    writeTextInHtml(userList.filter(user => user.firstname.includes(value))) 

})
exercise3.appendChild(inputName);
}
