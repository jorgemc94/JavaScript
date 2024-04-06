//3-. Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.


let day = prompt("Introduce el mensaje")
day = day.toLocaleLowerCase()
console.log(day)

if (day === "sabado" || day === "domingo"){
    console.log(day + " es fin de semana")
}else if(day === "lunes" ||day === "marter" ||day === "miercoles" ||day === "jueves" ||day === "viernes" ){
    console.log(day + "es dia laborable")
}
else{
    alert("Invalido")
}
