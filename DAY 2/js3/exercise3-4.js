//4-. Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'

const data = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'

const dataArr = data.split(' ')
//console.log(dataArr)
const number = []

for (index = 0; index < dataArr.length; index++){
    let num = dataArr[index]
    if (num.includes('0')){
        number.push(num)
    }
}

let salarioA = parseInt(number[0]) * 12
let bonoA = parseInt(number[1])
let cursoA = parseInt(number[2]) * 12

let ingresoA = salarioA + bonoA + cursoA
console.log(`El ingreso total es ${ingresoA} euros`)
