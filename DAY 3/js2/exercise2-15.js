// 15-. Cree un formato de hora legible por humanos usando el objeto Date.

const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const date = new Date().getDate()
const hours = new Date().getHours()
const minutes = new Date().getMinutes()

//YYYY-MM-DD HH:mm
console.log('formato YYYY-MM-DD HH:mm\n',year,'-',month,'-',date, ' ',hours,':',minutes ) 

//DD-MM-YYYY HH:mm
console.log('formato DD-MM-YYYY HH:mm\n',date,'-',month,'-',year, ' ',hours,':',minutes )

//DD/MM/YYYY HH:mm
console.log('formato DD/MM/YYYY HH:mm\n',date,'/',month,'/',year, ' ',hours,':',minutes )