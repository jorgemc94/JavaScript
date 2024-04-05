//3-. Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes

const valor1 = prompt('Introduce el primer valor: ')
const valor2 = prompt('Introduce el segundo valor')
//Usando if else
/*
if (parseInt(valor1) > parseInt(valor2)) {
    console.log(valor1,'es mayor que',valor2)
} else {
    console.log(valor1,'es menor que',valor2)
}
*/

//operador ternario.

valor1 > valor2
? console.log(valor1,'es mayor que',valor2)
: console.log(valor1,'es menor que',valor2)