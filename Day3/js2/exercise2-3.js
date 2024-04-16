//3-. Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))

const largoRectangulo = prompt('Introduce el largo del rectángulo: ')
const anchoRectangulo = prompt('Introduce el ancho del rectángulo: ')

const areaRectangulo = parseInt(largoRectangulo) * parseInt(anchoRectangulo)
const perimetroRectangulo = 2 * (parseInt(largoRectangulo) + parseInt(anchoRectangulo))

console.log('El área del rectángulo es: ' + areaRectangulo + '\nEl perímetro del rectángulo es: ' + perimetroRectangulo )