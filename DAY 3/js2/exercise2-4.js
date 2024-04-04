//4-. Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.

const radio = prompt('Introduzca el radio de la circunferencia: ')

const areaCirculo = 3.14 * parseInt(radio) * parseInt(radio)
const circunferencia = 2 * 3.14 * parseInt(radio)

console.log('El área del círculo es: ' + areaCirculo + '\nLa circunferencia del círculo es: ' + circunferencia)