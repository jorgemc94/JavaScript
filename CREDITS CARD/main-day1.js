const cards = [
    {
        "type": "MasterCard",
        "number": "4532750907210784",
        "expiration": "04/23",
        "owner": "Max Raynor"
    },
    {
        "type": "Visa Retired",
        "number": "2521245243761597",
        "expiration": "05/25",
        "owner": "Stella Gerhold"
    },
    {
        "type": "American Express",
        "number": "4024007178484134",
        "expiration": "12/26",
        "owner": "Lilliana Shanahan"
    },
    {
        "type": "Visa",
        "number": "5230345408485662",
        "expiration": "09/24",
        "owner": "Christina Gibson"
    },
    {
        "type": "Visa",
        "number": "2221179050665513",
        "expiration": "11/26",
        "owner": "Jake Feil"
    },
    {
        "type": "Discover Card",
        "number": "4024007108573097",
        "expiration": "10/26",
        "owner": "Victor Bashirian"
    },
    {
        "type": "MasterCard",
        "number": "4556101006271874",
        "expiration": "05/25",
        "owner": "Pearline Stroman"
    },
    {
        "type": "Visa",
        "number": "4024007120838510",
        "expiration": "11/24",
        "owner": "Evelyn Haag"
    },
    {
        "type": "Visa",
        "number": "4539663111220023",
        "expiration": "04/26",
        "owner": "Danika Abbott"
    },
    {
        "type": "MasterCard",
        "number": "4539556814256320",
        "expiration": "04/23",
        "owner": "Brennan Murazik"
    },
    {
        "type": "Visa Retired",
        "number": "4024007135604477",
        "expiration": "09/26",
        "owner": "Erich Mann"
    },
    {
        "type": "MasterCard",
        "number": "4539003948076191",
        "expiration": "01/24",
        "owner": "Caden White"
    },
    {
        "type": "Visa",
        "number": "349690052202486",
        "expiration": "08/25",
        "owner": "Isaac Wunsch"
    },
    {
        "type": "Visa",
        "number": "4532518359144623",
        "expiration": "07/25",
        "owner": "Julio Koepp"
    },
    {
        "type": "Discover Card",
        "number": "377988810243841",
        "expiration": "02/22",
        "owner": "Albin Hansen"
    },
    {
        "type": "MasterCard",
        "number": "5460743634710245",
        "expiration": "04/26",
        "owner": "Zane Stark"
    },
    {
        "type": "Visa",
        "number": "2300501839933926",
        "expiration": "05/24",
        "owner": "Fay Ryan"
    },
    {
        "type": "MasterCard",
        "number": "4716027439006",
        "expiration": "10/23",
        "owner": "Jarred Blanda"
    },
    {
        "type": "Visa",
        "number": "4539790805223",
        "expiration": "11/24",
        "owner": "Eugenia White"
    },
    {
        "type": "Discover Card",
        "number": "6011973455391849",
        "expiration": "04/25",
        "owner": "Gay Schmeler"
    },
    {
        "type": "Visa Retired",
        "number": "2303254868198600",
        "expiration": "05/26",
        "owner": "Salvador Effertz"
    },
    {
        "type": "MasterCard",
        "number": "4024007129219332",
        "expiration": "03/27",
        "owner": "Celestine Mosciski"
    },
    {
        "type": "Visa",
        "number": "2221031080406741",
        "expiration": "07/24",
        "owner": "Madge Rohan"
    },
    {
        "type": "American Express",
        "number": "5512989654927072",
        "expiration": "08/24",
        "owner": "Breanna Raynor"
    },
    {
        "type": "MasterCard",
        "number": "6011626148707207",
        "expiration": "02/25",
        "owner": "Humberto Rath"
    },
    {
        "type": "American Express",
        "number": "6011367636680149",
        "expiration": "04/27",
        "owner": "Ludwig Prosacco"
    },
    {
        "type": "Visa",
        "number": "4577679302986142",
        "expiration": "12/24",
        "owner": "Shayne Jacobson"
    },
    {
        "type": "Visa",
        "number": "6011468385387256",
        "expiration": "04/25",
        "owner": "Norbert Okuneva"
    },
    {
        "type": "MasterCard",
        "number": "4532452961540798",
        "expiration": "05/26",
        "owner": "Orie Barton"
    },
    {
        "type": "Visa",
        "number": "4485811360948372",
        "expiration": "09/25",
        "owner": "Viva Sawayn"
    },
    {
        "type": "MasterCard",
        "number": "5123418345276104",
        "expiration": "11/25",
        "owner": "Mark Gutmann"
    },
    {
        "type": "Visa Retired",
        "number": "4497605803646",
        "expiration": "03/26",
        "owner": "Jazmyne Crooks"
    },
    {
        "type": "MasterCard",
        "number": "6011016191448083",
        "expiration": "07/24",
        "owner": "Jovan Terry"
    },
    {
        "type": "Visa",
        "number": "5414887145268735",
        "expiration": "07/25",
        "owner": "Grace Nienow"
    },
    {
        "type": "American Express",
        "number": "5174880506977085",
        "expiration": "04/26",
        "owner": "Amara Green"
    },
    {
        "type": "Visa",
        "number": "4716246583121",
        "expiration": "12/24",
        "owner": "Felicity Cummerata"
    },
    {
        "type": "MasterCard",
        "number": "2438287332228460",
        "expiration": "06/24",
        "owner": "Alison Romaguera"
    },
    {
        "type": "MasterCard",
        "number": "4539571614530337",
        "expiration": "08/26",
        "owner": "Jaylon Franecki"
    },
    {
        "type": "Visa",
        "number": "6011774481250813",
        "expiration": "06/26",
        "owner": "Neoma Roberts"
    },
    {
        "type": "MasterCard",
        "number": "4929753793059258",
        "expiration": "10/24",
        "owner": "Rubye Emard"
    },
    {
        "type": "Visa",
        "number": "6011158117344796",
        "expiration": "09/24",
        "owner": "Jerrold Hirthe"
    },
    {
        "type": "American Express",
        "number": "2659664853334699",
        "expiration": "07/24",
        "owner": "Caden Buckridge"
    },
    {
        "type": "Visa",
        "number": "4408577529586874",
        "expiration": "12/24",
        "owner": "Ibrahim Walter"
    },
    {
        "type": "American Express",
        "number": "2221086020008528",
        "expiration": "12/25",
        "owner": "Kody Roberts"
    },
    {
        "type": "Visa",
        "number": "5268770113935567",
        "expiration": "01/27",
        "owner": "Royal Dibbert"
    },
    {
        "type": "Visa",
        "number": "347213265989781",
        "expiration": "02/26",
        "owner": "Magdalen Hyatt"
    },
    {
        "type": "Discover Card",
        "number": "2430020354803714",
        "expiration": "01/25",
        "owner": "Camryn Abernathy"
    },
    {
        "type": "MasterCard",
        "number": "4024007185278271",
        "expiration": "12/24",
        "owner": "Justice Hodkiewicz"
    },
    {
        "type": "MasterCard",
        "number": "2348172003937095",
        "expiration": "01/26",
        "owner": "Theodora Fisher"
    },
    {
        "type": "Visa",
        "number": "343400967610021",
        "expiration": "02/25",
        "owner": "Kobe Sanford"
    },
    {
        "type": "American Express",
        "number": "5550014770276297",
        "expiration": "01/25",
        "owner": "Shemar Muller"
    },
    {
        "type": "MasterCard",
        "number": "4829027244413690",
        "expiration": "07/24",
        "owner": "Dangelo West"
    },
    {
        "type": "Visa",
        "number": "4929564818694",
        "expiration": "07/26",
        "owner": "Jacey Rau"
    },
    {
        "type": "MasterCard",
        "number": "4045204648314125",
        "expiration": "05/24",
        "owner": "Lavonne Schimmel"
    },
    {
        "type": "Discover Card",
        "number": "4539396520235700",
        "expiration": "11/25",
        "owner": "Maxie Hoeger"
    },
    {
        "type": "Visa Retired",
        "number": "4929303009787",
        "expiration": "03/26",
        "owner": "Andre Harris"
    },
    {
        "type": "Visa",
        "number": "2221678525322527",
        "expiration": "10/25",
        "owner": "Haylee Barrows"
    },
    {
        "type": "Visa",
        "number": "4556302097298624",
        "expiration": "07/24",
        "owner": "Herta Bartell"
    },
    {
        "type": "MasterCard",
        "number": "2489140909442485",
        "expiration": "04/25",
        "owner": "Andres Donnelly"
    },
    {
        "type": "Visa",
        "number": "5141976960579928",
        "expiration": "02/26",
        "owner": "Vernon Funk"
    },
    {
        "type": "MasterCard",
        "number": "4532319205290904",
        "expiration": "01/27",
        "owner": "Alberto Steuber"
    },
    {
        "type": "American Express",
        "number": "4444175504443918",
        "expiration": "12/25",
        "owner": "Cleta Ziemann"
    },
    {
        "type": "American Express",
        "number": "4485065759634743",
        "expiration": "12/26",
        "owner": "Schuyler Rath"
    },
    {
        "type": "Visa",
        "number": "5567778101804107",
        "expiration": "11/26",
        "owner": "Lisette Schuster"
    },
    {
        "type": "MasterCard",
        "number": "2348245149658302",
        "expiration": "02/26",
        "owner": "Lori Veum"
    },
    {
        "type": "Visa Retired",
        "number": "4539978230810904",
        "expiration": "11/26",
        "owner": "Pearl Johnston"
    },
    {
        "type": "Visa",
        "number": "6011845541464667",
        "expiration": "02/26",
        "owner": "Sonny Weissnat"
    },
    {
        "type": "Visa",
        "number": "6011318057616963",
        "expiration": "03/26",
        "owner": "Miguel Wehner"
    },
    {
        "type": "Visa",
        "number": "5467436531296748",
        "expiration": "10/24",
        "owner": "Luther Trantow"
    },
    {
        "type": "MasterCard",
        "number": "5306374666623227",
        "expiration": "07/26",
        "owner": "Jerrell Hartmann"
    },
    {
        "type": "Visa",
        "number": "5454363670098039",
        "expiration": "10/25",
        "owner": "Buster Abshire"
    },
    {
        "type": "MasterCard",
        "number": "4011615892990395",
        "expiration": "06/26",
        "owner": "Peyton Kohler"
    },
    {
        "type": "Visa Retired",
        "number": "4532735529140386",
        "expiration": "06/26",
        "owner": "Marques Lind"
    },
    {
        "type": "American Express",
        "number": "4556171554014364",
        "expiration": "12/25",
        "owner": "Greg Howell"
    },
    {
        "type": "Visa",
        "number": "4916362343231",
        "expiration": "03/25",
        "owner": "Rachelle Schamberger"
    },
    {
        "type": "Visa",
        "number": "2659187622642861",
        "expiration": "06/25",
        "owner": "Lyric Jakubowski"
    },
    {
        "type": "American Express",
        "number": "4024007199823310",
        "expiration": "05/24",
        "owner": "Daren Botsford"
    },
    {
        "type": "Visa",
        "number": "2666106292920861",
        "expiration": "10/25",
        "owner": "Lilyan Streich"
    },
    {
        "type": "MasterCard",
        "number": "5186032806253694",
        "expiration": "12/25",
        "owner": "Roberto Torp"
    },
    {
        "type": "MasterCard",
        "number": "4024007176913050",
        "expiration": "03/25",
        "owner": "Michele Goodwin"
    },
    {
        "type": "MasterCard",
        "number": "2395781080842788",
        "expiration": "05/25",
        "owner": "Jade McGlynn"
    },
    {
        "type": "Visa",
        "number": "4916604559561646",
        "expiration": "02/25",
        "owner": "Israel McClure"
    },
    {
        "type": "MasterCard",
        "number": "4929398689448544",
        "expiration": "05/26",
        "owner": "Nils Bosco"
    },
    {
        "type": "MasterCard",
        "number": "4485732989994375",
        "expiration": "01/26",
        "owner": "Marielle Collier"
    },
    {
        "type": "MasterCard",
        "number": "348971986588476",
        "expiration": "05/26",
        "owner": "Kristina Hoppe"
    },
    {
        "type": "Visa",
        "number": "4556916514432316",
        "expiration": "03/25",
        "owner": "Rafael Ebert"
    },
    {
        "type": "Visa",
        "number": "5504126197283644",
        "expiration": "11/25",
        "owner": "Arjun Stanton"
    },
    {
        "type": "Visa",
        "number": "2720360756054352",
        "expiration": "01/25",
        "owner": "David Maggio"
    },
    {
        "type": "Visa Retired",
        "number": "4929405526797874",
        "expiration": "02/26",
        "owner": "Ricardo Cummerata"
    },
    {
        "type": "Visa Retired",
        "number": "5457065102277050",
        "expiration": "03/25",
        "owner": "Savion Grimes"
    },
    {
        "type": "Visa",
        "number": "4532498905015876",
        "expiration": "07/26",
        "owner": "Zola Rutherford"
    },
    {
        "type": "Visa",
        "number": "4929169707572635",
        "expiration": "09/25",
        "owner": "Albin Nitzsche"
    },
    {
        "type": "MasterCard",
        "number": "4929905172089997",
        "expiration": "08/25",
        "owner": "Joe Rohan"
    },
    {
        "type": "American Express",
        "number": "4556445850217750",
        "expiration": "02/27",
        "owner": "Cecelia Legros"
    },
    {
        "type": "Visa",
        "number": "2468378027856898",
        "expiration": "02/27",
        "owner": "Ashleigh Little"
    },
    {
        "type": "American Express",
        "number": "2610252291302276",
        "expiration": "09/25",
        "owner": "Kody Ferry"
    },
    {
        "type": "Visa Retired",
        "number": "2221456401432771",
        "expiration": "02/25",
        "owner": "Laurence Bruen"
    },
    {
        "type": "Visa Retired",
        "number": "6011335666270271",
        "expiration": "06/26",
        "owner": "Amelia Smith"
    },
    {
        "type": "Discover Card",
        "number": "4532594672920478",
        "expiration": "05/26",
        "owner": "Elwin Klein"
    },
    {
        "type": "Visa",
        "number": "2534545768794971",
        "expiration": "02/27",
        "owner": "Marques Sauer"
    }
]

    const root = document.getElementById('root'); //variable que va relacionada con nuestro div con id root

// 1-. Agrupar por el tipo de tarjeta de credito cuales existen dentro de la info

    const filterCards = []; //array vacio
    cards.forEach(card => { //foreach para buscar dentro del array cards y el parametro card en singular
        if(!filterCards.includes(card.type)){ // si el type de nuestra card no esta incluido en filterCards
            filterCards.push(card.type); //añadimos mediante push los datos que no están en nuestro array
        };
    });

    console.log(filterCards); // Mostramos en consola el resultado de nuestro bucle guardado en el array filterCards

    const exercise1 = document.createElement('h4');
    exercise1.innerText = (`1-. Agrupar por el tipo de tarjeta de credito cuales existen dentro de la info`);
    root.appendChild(exercise1);

    const exercise1Cont = document.createElement('p');
    exercise1Cont.innerText = filterCards;
    root.appendChild(exercise1Cont);

// 2-. Mostrar la información en HTML de forma que se muestre una tabla () por cada tipo de tarjeta con sus miembros

    const exercise2 = document.createElement('h4');
    exercise2.innerText = ('2-. Mostrar la información en HTML de forma que se muestre una tabla () por cada tipo de tarjeta con sus miembros');
    root.appendChild(exercise2);

    const table = document.createElement('table'); //creamos la tabla en html
    const head = document.createElement('thead'); //cabecera de la tabla html

    filterCards.forEach((type) => { // forEach para sacar los datos del array filterCards
        const tableHead = document.createElement('th'); // creamos la cabecera de la tabla
        tableHead.innerText = type; // escribe en la cabecera de la tabla el valor type
        head.appendChild(tableHead); //unimos la cabecera de la tabla a la tabla creada 
    });
    table.appendChild(head); //apendamos la cabecera de la tabla a la tabla 
    const rows = document.createElement('tr') //creamos las filas de nuestra tabla
    filterCards.forEach((type) => { // forEach para nuestro array filterCards con el parámetro type
    const cols = document.createElement('td') // creamos las columnas de nuestra tabla

        let filterPerson = cards.filter((card) => card.type === type) //creamos un array para filtrar las personas por su tipo de tarjeta
        filterPerson.forEach((person) => { // recorremos nuestro array filterPerson 
            const ownerCard = document.createElement('p') //creamos la etiqueta p html
            ownerCard.innerText = person.owner // a nuestra variable le asignamos el valor de person.owner
            cols.appendChild(ownerCard) //apendamos nuestra variable a la variable cols
        })

        rows.appendChild(cols)
    })

    table.appendChild(rows)
    root.appendChild(table)

// 3-. Indicar en HTML Cuantas personas tienen la fecha de expiración en este año para la tarjeta de credito.

    let count = 0; //variable contador
    let dateYear = new Date().getFullYear().toString(); //convertimos el año actual 2024 a cadena de texto
    let yearNow = dateYear.slice(2); //del año actual nos quedamos con los dos ultimos digitos
    Number(yearNow); //convertimos nuestro yearNow a número

    cards.forEach(yearExpired => { //foreach para buscar dentro del array cards y el parametro yearExpired
        if(Number(yearExpired.expiration.split('/')[1] === yearNow)){ // si año actual es igual a año de expiración
            count ++ // aumentamos el valor de 1 a nuestra variable count
        }
    })

    const exercise3 = document.createElement('h4');
    exercise3.innerText = ('3-. Indicar en HTML Cuantas personas tienen la fecha de expiración en este año para la tarjeta de credito.');
    root.appendChild(exercise3);

    const exercise3Cont = document.createElement('p');
    exercise3Cont.innerText = (`El total de personas que le caducan la tarjeta de credito este año es: ${count}`);
    root.appendChild(exercise3Cont)

// 4-. Indicar en HTML el nombre de las personas que tienen la tarjeta de credito caducada (inferior a este mes)

    let exercise4 = document.createElement('h4')
    exercise4.innerText = ('4-. Indicar en HTML el nombre de las personas que tienen la tarjeta de credito caducada (inferior a este mes')
    root.appendChild(exercise4)

    let dateMonth = '0' + (new Date().getMonth()+1); // variable que añade un 0 a la fecha actual
    let monthNow = Number(dateMonth.slice(-2)); // variable que coge las dos ultimos dígitos de nuestra variable dateMonth
    cards.forEach(expired => { //foreach para buscar dentro del array cards y el parametro expired
    //comprobamos si mes y año es igual o menor al mes y año actual
        if(Number(expired.expiration.split('/')[0]) <= monthNow && Number(expired.expiration.split('/')[1]) <= yearNow){
            let cardExpired = document.createElement('p') //creamos un párrafo en html asignando la variable cardExpired
            cardExpired.innerText = expired.owner // a nuestra variable cardExpired le damos el valor de la persona
            root.appendChild(cardExpired) // apendamos nuestra variable al div root
        }
    });



