//14-. Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años

const numYear = prompt('Introduce un número de años: \nPasando de 100 años manda un alert')
const segYear = 31536000

if (parseInt(numYear) <= 100) {
    const liveSeg = parseInt(numYear) * segYear
    console.log('Viviste' , liveSeg , 'segundos.')
} else {
    alert ('El cálculo llega hasta 100 años')
}