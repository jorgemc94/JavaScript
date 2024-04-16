//14-. Filtre las empresas que tienen más de una 'o' sin el método filter()
//Vamos a ir compañia a compañia dentro de nuestro ARRAY
for (let posicionCompañia = 0; posicionCompañia < itCompanies.length; posicionCompañia++) {
    // Vamos a ir letra por letra para ver si tiene O
    //AQUI HABLAMOS DE PALABRAS 
    let company = itCompanies[posicionCompañia] // Vamos a tener Facebook, Google ....
    let numero_de_o = 0

    for (let posicionLetra = 0; posicionLetra < company.length; posicionLetra++) {
        //AQUI HABLAMOS DE LETRAS
        let letra = company[posicionLetra]

        if (letra === "o"){
            numero_de_o = numero_de_o + 1   
        }
    }
    //VOLVEMOS A LA PALABRA

    if (numero_de_o > 1)
        console.log(company)

}