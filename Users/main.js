//1-. Consumir (fetch) la API de usuarios https://fakerapi.it/api/v1/users?_quantity=20&_gender=male

    const exercise1 = document.getElementById('exercise1');
    let url = 'https://fakerapi.it/api/v1/users?_quantity=20&_gender=male';
    //Titulo del ejercicio
    const title1 = document.createElement('h4')
    title1.innerText = '1-. Consumir la API de usuarios https://fakerapi.it/api/v1/users?_quantity=20&_gender=male'
    exercise1.appendChild(title1)

    //Array para guardar las personas
    let personArray = [];

    //Funcion para escribir HTML
    const writeTextInHtml = (personArray,divId) =>{ //añadimos dos parámateros
      const div = document.getElementById(divId) // creamos una variable que la unimos a nuestro segundo parámetro
      div.innerHTML= '';
      personArray.forEach(person => {
        const content = document.createElement('p');
        //Para quedar los datos guardados en la clase
        content.innerText = person.getInfo();
        div.appendChild(content)
      });
    }
    //Hacer peticion a una URL
  
    const fetchData = (url, divId) => { // creamos una funcion para hacer la peticion a la url y añadimos el segundo parámetro
      const request = fetch(url) //realizamos nuestra peticion
      .then((response) => { // mientras que haya respuesta
        if (response.ok) { //comprobamos que la respuesta sea ok
          response.json().then((jsonData) => { // nos devuelve un json y mientras que sea json
            personArray = jsonData.data; //añadimos los objetos a nuestro array
            console.log(personArray);
            let userList = []; //creamos un array para añadir los usuarios y poder acceder a los metedos
            //creamos nuestro objetos cogiendo la información obtenida
            personArray.forEach(person => { // recorremos nuestro array personArray
              //creamos los objetos de nuestros nuevos usuarios
              const user = new User(person.id, person.firstname, person.lastname, person.email, person.username, person.ip); //agregamos nuestros nuevos usuarios a una variable
              console.log(user) // mostramos por consola nuestros usuarios
              userList.push(user) //añadimos los usuarios a nuestro array userList
            });
            console.log(userList) // mostramos usuarios en la consola
            writeTextInHtml(userList, divId) // escribimos el resultado en nuestro HTML con el parámetro divId
            createSearchInputName(userList) 
          })
          .catch((error) => alert('Error informacion de la API'));
        }
      })
      .catch((Error) => 'Error al contactar con la API');
    }
      
    fetchData(url,'exercise2Content') //Llamamos a la funcion con el parametro url y el div al que se pinta
    