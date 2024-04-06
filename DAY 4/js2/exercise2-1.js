//1-. Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:

/*
90-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

const nota = prompt('Introduce la nota: ')

if (nota <=49) {
    console.log('Tu notas es: ' + nota + ' F')
} else if (nota <= 59){
    console.log('Tu notas es: ' + nota + ' D')
} else if (nota <=69) {
    console.log('Tu notas es: ' + nota + ' C')
} else if (nota <= 89) {
    console.log('Tu notas es: ' + nota + ' B')
} else if ( nota <=100) {
    console.log('Tu notas es: ' + nota + ' A')
} else { 
    alert('Nota erronea')
}