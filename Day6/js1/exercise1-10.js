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

//imprimir en la web
let sumaParImp = document.createElement("p") //creamos una variable con la etiqueta html que usaremos
sumaParImp.innerText = `La suma de los numeros pares es: ${sumaPar}`; // asignamos el texto a la variable creada
root.appendChild(sumaParImp); //unimos nuestra variable al padre por su id

let sumaImparImp = document.createElement("p")
sumaImparImp.innerText = `La suma de los numeros impares es: ${sumaImpar}`;
root.appendChild(sumaImparImp);

console.log(`La suma de los numeros pares entre 0 y 100 es: ${sumaPar}`)
console.log(`La suma de los numeros impares entre 0 y 100 es: ${sumaImpar}`)