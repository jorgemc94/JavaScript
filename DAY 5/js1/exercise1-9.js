//9-. Imprime la primer empresa , la intermedia y la última empresa

console.log(`Primer elemento del array es: ${itCompanies[0]}`)

let lastitCompanies = itCompanies.length - 1;
lastitCompanies = itCompanies[lastitCompanies];
console.log(`El ultimo elemento del array es: ${lastitCompanies}`)

let mediumitCompanies = itCompanies.length / 2 //dara indefinido porque el numero medio es 3.5
mediumitCompanies = itCompanies[mediumitCompanies]
console.log(`El elemento central del array es: ${itCompanies[3]}`) 

