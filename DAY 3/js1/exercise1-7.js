//7-. Utilice el objeto Date para realizar las siguientes actividades

//¿Qué año es hoy?
const yearA = new Date();
console.log('El año actual es: ' + yearA.getFullYear());

//¿Qué mes es hoy con un número?

const monthA = new Date();
console.log('El mes actual es: ' + monthA.getMonth()); //los meses van de 0-11 donde 0 es enero y 11 diciembre

//¿Qué fecha es hoy?

const dayA = new Date();
console.log('El dia es: ' + dayA.getDate()); 

//¿Qué día es hoy con un número?

const dayS = new Date();
console.log('el dia de la semana es: ' + dayS.getDay()); 
//los dias de la semana van de 0-6 donde 0 es domingo y 6 es sabado

//¿Cuál es la hora actual?

const hourA = new Date();
console.log('la hora actual es: ' + hourA.getHours()); 

//¿Cuántos minutos hay actualmente?

const minA = new Date();
console.log('los minutos actuales son: ' + minA.getMinutes()); 
//Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.

const seg = Date.now(); //
console.log('Los segundos transcurridos desde el 1 de enero de 1970 hasta ahora son: ' + seg);