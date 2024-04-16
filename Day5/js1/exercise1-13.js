//Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe

const empresaEntrada = prompt('Introduce una empresa')

if (itCompanies.includes(empresaEntrada)){
    console.log(`La empresa ${empresaEntrada} se encuentra en el array`)
} else {
    console.log(`La empresa ${empresaEntrada} no existe en el array`)
}