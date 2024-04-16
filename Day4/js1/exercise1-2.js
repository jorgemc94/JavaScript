// 2-. Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.

const myAge2 = 30;
const yourAge2 = prompt('Introduce tu edad: ')

if (parseInt(yourAge2) > myAge2 ) {
    const age2Diff = parseInt(yourAge2) - myAge2
    console.log('Eres ' + age2Diff + ' años mayor que yo.')
} else if (myAge2 > parseInt(yourAge2)) {
    const age2Diff = myAge2 - parseInt(yourAge2)
    console.log('Eres ' + age2Diff + ' años menor que yo.')
} else {
    console.log ('Tenemos la misma edad, ' + myAge2 + ' años..')
}