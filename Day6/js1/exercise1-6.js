//6-. Usando un bucle imprime el siguiente patrón:
/*
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
 */

 console.log("i  " + "i^2  " + "i^3")

for (i = 0; i <=10; i++) {
    let cuadrado = i * i;
    let cubo = cuadrado * i;
    console.log(`${i} ${cuadrado} ${cubo}`)
}