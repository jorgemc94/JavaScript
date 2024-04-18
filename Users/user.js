//2-. Crear la subclase Usuarios, teniendo en cuenta que tienen propiedades comunes 2.1 Mostrarlo en HTML los resultados de usuarios.

const exercise2 = document.getElementById('exercise2');

const title2 = document.createElement('h4');
title2.innerText = '2-. Crear las clases de persona y usuario, teniendo en cuenta que tienen propiedades comunes. Muestra el resultado de usuarios en HTML';
exercise2.appendChild(title2);

class User extends Person {
    constructor(id, firstname, lastname, email, username, ip) {
        super(id, firstname, lastname)
        this.email = email;
        this.username = username;
        this.ip = ip;
    }

    getemail() {
        return this.email;
    }

    getusername() {
        return this.username;
    }

    getip() {
        return this.ip;
    }

    getInfo () {
        return `${this.id} ${this.firstname} ${this.lastname} ${this.email} ${this.username} ${this.ip}`;
    }
}