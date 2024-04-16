// 2-. Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :
/*
Septiembre, Octubre o Noviembre, la temporada es Otoño.
Diciembre, Enero o Febrero, la temporada es Invierno.
Marzo, Abril o Mayo, la temporada es Primavera
Junio, Julio o Agosto, la temporada es Verano
*/

const mes = prompt('Introduce un mes: \n Enero Febreo Marzo...')

if (mes === 'Septiembre' || mes === 'Octubre' || mes === 'Noviembre') {
    console.log('La temporada es Otoño, coincidiendo con el mes: ' + mes)
} else if (mes === 'Diciembre' || mes === 'Enero' || mes === 'Febrero') {
    console.log('La temporada es Invierno, coincidiendo con el mes: ' + mes)
} else if (mes === 'Marzo' || mes === 'Abril' || mes === 'Mayo') {
    console.log('La temporada es Primavera, coincidiendo con el mes: ' + mes)
} else if (mes === 'Junio' || mes === 'Julio' || mes === 'Agosto') {
    console.log('La temporada es Otoño, coincidiendo con el mes: ' + mes)
} else {
    alert('Introduce un mes correcto')
}