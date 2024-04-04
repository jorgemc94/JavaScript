//4-. Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'

let text4 = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'

let num = text4.replace(/[^0-9 ]/g, '')
console.log(num)

let salario = 5000 * 12
let curso = 15000 * 12
let bono = 10000

let ingreso = salario + curso + bono

console.log(ingreso)