//10-. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.

let sumaPar = 0;
let sumaImpar = 0;

for ( i = 0; i <= 100; i++) {
    if (i % 2 === 0){
        sumaPar = sumaPar + i
    } else {
        sumaImpar = sumaImpar + i
    }
    
}
let sumaParImp = document.createElement("p")
sumaParImp.innerText = `La suma de los numeros pares es: ${sumaPar}`;
root.appendChild(sumaParImp);
let sumaImparImp = document.createElement("p")
sumaImparImp.innerText = `La suma de los numeros impares es: ${sumaImpar}`;
root.appendChild(sumaImparImp);
console.log(`La suma de los numeros pares entre 0 y 100 es: ${sumaPar}`)
console.log(`La suma de los numeros impares entre 0 y 100 es: ${sumaImpar}`)