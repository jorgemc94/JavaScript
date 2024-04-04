// 9-. Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?

const horasSemana = prompt('Introduce el número de horas trabajadas a la semana: ')
const precioHora = prompt('Introduce el precio de las horas: ')
const salarioSemana = parseInt(horasSemana) * parseFloat(precioHora)

console.log('El salario semanal es: ' , salarioSemana)