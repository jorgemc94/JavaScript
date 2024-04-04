//1-. Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).

const baseT = prompt ('Ingrese la base: ')
const alturaT = prompt ('Ingrese la altura: ')

const areaT = 0.5 * parseInt(baseT) * parseInt(alturaT)

console.log ('El área del triángulo es: ' + areaT)