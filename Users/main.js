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
    const writeTextInHtml = (personArray) =>{
      personArray.forEach(person => {
        const content = document.createElement('p');
        //Para quedar los datos guardados en la clase
        content.innerText = person.getInfo();
        exercise2.appendChild(content)
      });
    }
    //Hacer peticion a una URL
  
    const request = fetch(url)
      .then((response) => {
        if (response.ok) {
          response.json().then((jsonData) => {
            personArray = jsonData.data;
            console.log(personArray);
            //creamos un array para añadir los usuarios y poder acceder a los metedos
            let userList = [];
            //creamos nuestro objetos cogiendo la información obtenida
            personArray.forEach(person => {
              //creamos objetos usuario
              const user = new User(person.id, person.firstname, person.lastname, person.email, person.username, person.ip);
              console.log(user)
              //añadimos los usuarios a nuestro array userList
              userList.push(user)
            });
            console.log(userList)
            writeTextInHtml(userList)
          })
          .catch((error) => alert('Error informacion de la API'));
        }
      })
      .catch((Error) => 'Error al contactar con la API');
      
      
    