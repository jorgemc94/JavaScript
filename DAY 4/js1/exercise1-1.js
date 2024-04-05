// 1-. Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.

const age1 = prompt('Introduce tu edad: ')

if (parseInt(age1) >= 18) {
    console.log('Tienes la edad suficiente para conducir.')
} else {
    const age1Diff = 18 - parseInt(age1)
    console.log('Te faltan ' +  age1Diff  + ' años para conducir.')
}