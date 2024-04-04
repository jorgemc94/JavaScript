//2-. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)

const ladoAT = prompt('Introduce el lado A: ')
const ladoBT = prompt('Introduce el lado B: ')
const ladoCT = prompt('Introduce el lado C: ')

const ladoST = parseInt(ladoAT) + parseInt(ladoBT) + parseInt(ladoCT)
console.log('El perímetro del triángulo es: ' + ladoST)