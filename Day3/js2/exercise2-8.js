//8-. Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.

const valorX = prompt('Introduce el valor de x: \n si quieres que el valor de Y sea 0 introduce -3')

const valorY = (parseInt(valorX)*parseInt(valorX) + (6 * parseInt(valorX)) + parseInt(9))

console.log('El valor de y es:' , valorY)