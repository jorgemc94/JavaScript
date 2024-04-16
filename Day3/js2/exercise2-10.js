// 10-. Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.

const nameIntro = prompt('Introduce tu nombre: ')

if (nameIntro.length <= 7) 
    console.log ('Tu nombre es corto')
 else 
    console.log ('Tu nombre es largo')