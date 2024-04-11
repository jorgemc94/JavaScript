//4-. Escribe un bucle que haga el siguiente patrón usando console.log():
/*    
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

for (let i = 1; i < 8; i++) {
    let resultado = '';
    for (let j = 1; j <=i; j++){
        resultado += '# '
    }
    console.log(resultado)
}