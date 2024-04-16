//2-. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)

const ladoATriangulo = prompt('Introduce el lado A: ')
const ladoBTriangulo = prompt('Introduce el lado B: ')
const ladoCTriangulo = prompt('Introduce el lado C: ')

const ladoSTriangulo = parseInt(ladoATriangulo) + parseInt(ladoBTriangulo) + parseInt(ladoCTriangulo)
console.log('El perímetro del triángulo es: ' + ladoSTriangulo)