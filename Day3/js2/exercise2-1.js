//1-. Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).

const baseTriangulo = prompt ('Ingrese la base: ')
const alturaTriangulo = prompt ('Ingrese la altura: ')

const areaTriangulo = 0.5 * parseInt(baseTriangulo) * parseInt(alturaTriangulo)

console.log ('El área del triángulo es: ' + areaTriangulo)