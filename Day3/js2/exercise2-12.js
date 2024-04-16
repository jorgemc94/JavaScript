//12-. Declare dos variables myAge y yourAge y asignarles los valores iniciales y myAge y yourAge.

const myAge = prompt('Introduce tu edad: ')
const yourAge = prompt('Introduce la edad a comparar: ')
if (parseInt(myAge) > parseInt(yourAge)) {
    let difYear = parseInt(myAge) - parseInt(yourAge)
    console.log ('La diferencia de edad entre tu edad y la introducida para comparar es de: ' , difYear)
} else {
    let difYear = parseInt(yourAge) - parseInt(myAge)
    console.log ('La diferencia de edad entre la introducida para comparar y tu edad es de: ' , difYear)
}