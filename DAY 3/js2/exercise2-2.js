//2-. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)

const ladoA = prompt('Introduce el lado A: ')
const ladoB = prompt('Introduce el lado B: ')
const ladoC = prompt('Introduce el lado C: ')

const ladoS = parseInt(ladoA) + parseInt(ladoB) + parseInt(ladoC)
console.log('El perímetro del triángulo es: ' + ladoS)