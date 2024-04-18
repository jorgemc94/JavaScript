//Crear la clase Personas

class Person {
    constructor(id, firstname, lastname){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getid () {
        return this.id;
    }
    
    getfirstname () {
        return this.firstname
    }

    getlastname () {
        return this.lastname
    }
}