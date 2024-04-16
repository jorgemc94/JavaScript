//2-. Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array

const text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const simbolos = [".", ","];
const text_array = text.split(" ");
const words = [];

for (let index = 0; index < text_array.length; index++) {
	let palabra = text_array[index];

	for (
		let posicionLetra = 0;
		posicionLetra < palabra.length;
		posicionLetra++
	) {
		//AQUI HABLAMOS DE LETRAS
		let letra = palabra[posicionLetra];
		if (simbolos.includes(letra)) {
			palabra = palabra.replace(letra, "");
		}
	}

	words.push(palabra);
}
console.log(words.length);