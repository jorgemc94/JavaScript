// 3-. Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).

let text3 = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let textClean = text3.replace(/[^a-zA-Z0-9 ]/g, '') //-g 
console.log(textClean)



