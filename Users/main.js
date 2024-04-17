/*
const userList = [
    {
        "status": "OK",
        "code": 200,
        "total": 20,
        "data": [
          {
            "id": 1,
            "uuid": "9e796a47-c2d7-34eb-b3e5-74b585b19c65",
            "firstname": "Bernardo",
            "lastname": "Block",
            "username": "oran.fritsch",
            "password": "5&iuFu\u003E*\u003E)B;f:h",
            "email": "cyril12@yahoo.com",
            "ip": "160.167.99.215",
            "macAddress": "BD:99:34:9D:C9:4D",
            "website": "http://moen.net",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 2,
            "uuid": "9193e3d3-be4a-3cbb-a796-2fac844be1db",
            "firstname": "Magnus",
            "lastname": "Lemke",
            "username": "jsatterfield",
            "password": "{c}]Xv\".9",
            "email": "zupton@gmail.com",
            "ip": "245.6.137.226",
            "macAddress": "AC:02:E6:37:17:8D",
            "website": "http://rath.org",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 3,
            "uuid": "5f463e78-e59a-3ba9-a08f-c2be5e0c2af4",
            "firstname": "Ernest",
            "lastname": "Kassulke",
            "username": "monty86",
            "password": "3/9r@%W[i",
            "email": "myron.wunsch@gmail.com",
            "ip": "97.27.130.209",
            "macAddress": "F7:55:D0:12:85:9D",
            "website": "http://maggio.net",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 4,
            "uuid": "2e7bfe73-34d8-37dd-86d5-19c8ed0c658f",
            "firstname": "Merritt",
            "lastname": "Parisian",
            "username": "virginie.bins",
            "password": "4d6K\u003ES)0.z-op#acnM~M",
            "email": "deonte.mante@wilkinson.net",
            "ip": "139.152.232.185",
            "macAddress": "88:3D:F9:13:6B:2B",
            "website": "http://boehm.info",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 5,
            "uuid": "34e25ad2-80ad-32eb-98e6-2f98e7d0de97",
            "firstname": "Korey",
            "lastname": "Kozey",
            "username": "dooley.eleonore",
            "password": "Zb\\B-X",
            "email": "margaret96@mitchell.com",
            "ip": "254.24.68.158",
            "macAddress": "A1:76:D2:28:C6:E9",
            "website": "http://gaylord.com",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 6,
            "uuid": "aea00f3f-45a3-3bf7-8264-e78d492c92b6",
            "firstname": "Kelley",
            "lastname": "Hickle",
            "username": "yvette.kulas",
            "password": "~MC0mQO}Z::|tCM3R",
            "email": "clemens47@hotmail.com",
            "ip": "95.180.206.22",
            "macAddress": "15:8F:D6:93:3C:90",
            "website": "http://treutel.com",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 7,
            "uuid": "0019852f-f4d9-3349-98f8-2bf9fcc866ad",
            "firstname": "Sheldon",
            "lastname": "Herzog",
            "username": "oward",
            "password": ")id')Hd8hFnCz=6GifdC",
            "email": "krajcik.millie@langworth.com",
            "ip": "53.152.43.9",
            "macAddress": "E6:BF:5E:D5:7C:CE",
            "website": "http://barton.com",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 8,
            "uuid": "dc1146a4-a733-37fe-a2d7-f53ec1d32967",
            "firstname": "Theron",
            "lastname": "Harvey",
            "username": "felix06",
            "password": "oFlo!$+[~:ux=m",
            "email": "reichert.albin@simonis.com",
            "ip": "81.29.166.66",
            "macAddress": "ED:B4:F0:1B:70:19",
            "website": "http://mohr.com",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 9,
            "uuid": "3783a480-9b60-3c74-8e4a-d29d5b2bcbf6",
            "firstname": "Bradford",
            "lastname": "Sauer",
            "username": "bruen.ceasar",
            "password": "\u003C|tzWQwCP4^",
            "email": "hackett.madelynn@breitenberg.com",
            "ip": "216.100.254.41",
            "macAddress": "04:2C:C1:F0:AD:17",
            "website": "http://lesch.com",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 10,
            "uuid": "2ddea58b-11de-338a-b162-bf0a62db9566",
            "firstname": "Francesco",
            "lastname": "Nitzsche",
            "username": "jdamore",
            "password": "CAtW~v",
            "email": "heathcote.carol@gmail.com",
            "ip": "86.240.65.242",
            "macAddress": "D2:3F:34:62:A1:DE",
            "website": "http://waelchi.com",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 11,
            "uuid": "1253cf40-fd1e-3c15-8eef-ef2f262539cf",
            "firstname": "Brent",
            "lastname": "Padberg",
            "username": "tina36",
            "password": "[D_];uXT38hC=\u003E&",
            "email": "jonathon.bode@yahoo.com",
            "ip": "206.205.183.139",
            "macAddress": "AE:D3:7E:83:BB:53",
            "website": "http://bernhard.org",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 12,
            "uuid": "16181141-72b6-3967-9baf-2529d96676c0",
            "firstname": "Santa",
            "lastname": "Shanahan",
            "username": "vnicolas",
            "password": "O;%7M8G",
            "email": "kari.sauer@wunsch.com",
            "ip": "90.109.159.102",
            "macAddress": "BF:17:22:08:1F:92",
            "website": "http://morar.com",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 13,
            "uuid": "b0e7192d-a87a-3d4d-afcf-7345ba7da0f6",
            "firstname": "Bernhard",
            "lastname": "Roob",
            "username": "kkuhlman",
            "password": "j,)\"%=1$4?Tr}8oD(/",
            "email": "meta.wolf@runte.info",
            "ip": "173.235.253.199",
            "macAddress": "FF:F5:B2:6E:22:02",
            "website": "http://trantow.info",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 14,
            "uuid": "8f8988fb-2ce6-316f-a31b-2d2e594e4777",
            "firstname": "Braeden",
            "lastname": "Jakubowski",
            "username": "wintheiser.kaci",
            "password": "T*,ifl}v]",
            "email": "henriette41@sporer.info",
            "ip": "7.90.108.61",
            "macAddress": "3E:1D:4E:96:BE:B4",
            "website": "http://stokes.info",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 15,
            "uuid": "92a15a8e-fa8d-3914-9887-deba769443f3",
            "firstname": "Izaiah",
            "lastname": "Ritchie",
            "username": "ollie42",
            "password": "YGv*`Y[",
            "email": "allene01@yahoo.com",
            "ip": "216.240.255.163",
            "macAddress": "AD:DD:B3:83:4C:1B",
            "website": "http://bahringer.biz",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 16,
            "uuid": "f5bbdd2d-2286-3a3d-b786-c8721a32e493",
            "firstname": "Zander",
            "lastname": "Gerlach",
            "username": "carroll.hiram",
            "password": "z6^xp\\UY`bX|]7/1",
            "email": "gspinka@gmail.com",
            "ip": "234.202.242.40",
            "macAddress": "D2:12:8C:98:3C:65",
            "website": "http://schimmel.info",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 17,
            "uuid": "367395a6-7154-3a1f-bbe2-2843513acb44",
            "firstname": "Amir",
            "lastname": "Fritsch",
            "username": "pascale.dooley",
            "password": "777$zjY",
            "email": "darron42@runolfsdottir.org",
            "ip": "111.145.205.247",
            "macAddress": "BD:C8:AD:D6:F2:95",
            "website": "http://wehner.com",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 18,
            "uuid": "0b98239b-a570-3c56-a8f2-332920e1b584",
            "firstname": "Cecil",
            "lastname": "Keebler",
            "username": "garth.predovic",
            "password": "Of\"%Me#o-+",
            "email": "keeley65@hotmail.com",
            "ip": "223.226.14.218",
            "macAddress": "34:0C:4D:D8:F0:E3",
            "website": "http://becker.com",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 19,
            "uuid": "5ab0bc65-502a-3007-9000-ab45990824ab",
            "firstname": "Cornelius",
            "lastname": "Mann",
            "username": "moen.karley",
            "password": ".g9}!fXPylFmit",
            "email": "alexandria.legros@ziemann.com",
            "ip": "164.183.88.237",
            "macAddress": "71:32:30:F4:E9:40",
            "website": "http://donnelly.com",
            "image": "http://placeimg.com/640/480/people"
          },
          {
            "id": 20,
            "uuid": "670d1730-08ec-3c02-a6ed-d84b03a70322",
            "firstname": "Chelsey",
            "lastname": "Zulauf",
            "username": "steuber.joey",
            "password": "\u003Ez7hTg;Vx.i2",
            "email": "leannon.alize@fay.com",
            "ip": "116.216.162.223",
            "macAddress": "12:32:A5:B7:71:3A",
            "website": "http://walter.com",
            "image": "http://placeimg.com/640/480/people"
          }
        ]
      }
]
*/

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
        content.innerText = `ID: ${person.id} Firstname: ${person.firstname} lastname: ${person.lastname}`
        exercise1.appendChild(content)
      });
    }
    //Hacer peticion a una URL
  
    const request = fetch(url)
      .then((response) => {
        if (response.ok) {
          response.json().then((jsonData) => {
            personArray = jsonData.data;
            console.log(personArray);
            writeTextInHtml(personArray)
          })
          .catch((error) => alert('Error'));
        }
      })
      .catch((Error) => 'Error');
      
      
    