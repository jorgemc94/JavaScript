// 11-. Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.

const nameCompare = prompt ('Introduce tu nombre: ')
const subnameCompare = prompt ('Introduce tu apellido')

if (nameCompare.length > subnameCompare.length) 
    console.log ('Tu nombre' , nameCompare , ' es mayor que tu apellido' , subnameCompare)
else if (nameCompare.length < subnameCompare.length)
    console.log('Tu nombre' , nameCompare , ' es menor que tu apellido ' , subnameCompare)
else
    console.log('Tu nombre' , nameCompare , 'es igual que tu apellido' , subnameCompare)
