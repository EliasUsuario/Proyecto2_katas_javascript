// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const button = document.querySelector('.showme');
console.log(button);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const pillado = document.querySelector('#pillado');
console.log(pillado);
// 1.3 Usa querySelector para mostrar por consola todos los p
const todosLosP = document.querySelectorAll('p');
console.log(todosLosP);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
const todosLosPokemons = document.querySelectorAll('.pokemon');
console.log(todosLosPokemons);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe"
const todosLosTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log(todosLosTestMe);

// 1.6 Usa querySelector para mostrar por consola el 3er personaje con el atributo data-function="testMe"
const personaje3Test = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(personaje3Test);