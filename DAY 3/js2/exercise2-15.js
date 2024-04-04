// 15-. Cree un formato de hora legible por humanos usando el objeto Date.

const year = new Date().getFullYear(); // devuelve años
const month = new Date().getMonth() + 1; // devuelve meses(0 - 11)
const date = new Date().getDate(); // devuelve días (1 - 31)
const hours = new Date().getHours(); // devuelve horas (0 - 23)
const minutes = new Date().getMinutes(); // devuelve minutos (0 -59)

//YYYY-MM-DD HH:mm
console.log('formato YYYY-MM-DD HH:mm\n',year,'-',month,'-',date, ' ',hours,':',minutes ) 

//DD-MM-YYYY HH:mm
console.log('formato DD-MM-YYYY HH:mm\n',date,'-',month,'-',year, ' ',hours,':',minutes )

//DD/MM/YYYY HH:mm
console.log('formato DD/MM/YYYY HH:mm\n',date,'/',month,'/',year, ' ',hours,':',minutes )