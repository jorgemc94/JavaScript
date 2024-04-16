// 1-. Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05) YYY-MM-DD HH:mm
const time = new Date()
const year = time.getFullYear()
const month = time.getMonth()
const date = time.getDate() 
const hours = time.getHours() 
const minutes = time.getMinutes()


if (hours <= 9 || minutes <= 9) 
    console.log('Formato YYYY-MM-DD HH-mm \n' + year + '-' + month + '-' + date + ' ' + 0+hours + ":" + 0+minutes)
else 
    console.log('Formato YYYY-MM-DD HH-mm \n' + `${year}-${month}-${date} ${hours}:${minutes}`)
