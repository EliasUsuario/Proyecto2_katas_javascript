//40- Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve 
// la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro. 
// Haz varios ejemplos y compruébalos.

function findArrayIndex(array, text) {
 for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
    return -1;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

//Pruebas:

console.log("Posición de Anakin:", findArrayIndex(mainCharacters, "Anakin")); //5
console.log("Posición de Luke:", findArrayIndex(mainCharacters, "Luke"));     //0
console.log("Posición de Rey:", findArrayIndex(mainCharacters, "Rey"));       //4
console.log("Posición de Yoda:", findArrayIndex(mainCharacters, "Yoda"));     //-1 (no existe)

//Usando la función anterior tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, 
// apoyándote en findArrayIndex. Finalmente retorna el array. Haz varios ejemplos para practicar y comprueba que funcionan correctamente.

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
    return -1;
}

function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
        array.splice(index, 1);
    } else {
        console.log("El elemento '" + text + "' no se encontró, por lo que no se eliminó nada.");
    }
    return array;
}

//Pruebas:

console.log("Eliminando a Anakin...");
removeItem(mainCharacters, "Anakin");
console.log(mainCharacters); 

console.log("Eliminando a Luke...");
removeItem(mainCharacters, "Luke");
console.log(mainCharacters);

console.log("Intentando eliminar a Yoda (no existe)...");
removeItem(mainCharacters, "Yoda");
console.log(mainCharacters);


