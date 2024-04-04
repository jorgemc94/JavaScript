//1-. Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).

const base = prompt ('Ingrese la base: ')
const altura = prompt ('Ingrese la altura: ')

const area = 0.5 * parseInt(base) * parseInt(altura)

console.log ('El área del triángulo es: ' + area)