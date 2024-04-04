//13-. Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.

const ageDriver = prompt('Introduce tu año de nacimiento: ')
const yearNow = new Date().getFullYear()
const driver = parseInt(yearNow) - parseInt(ageDriver)



if (parseInt(driver) >= 18) {
    console.log ('Tienes ' , driver , ' años, edad suficiente para conducir')
} else {
    const driverDif = 18 - driver
    console.log('Tienes ' , driver , ' años, te faltan ' , driverDif , 'años para conducir')
}


