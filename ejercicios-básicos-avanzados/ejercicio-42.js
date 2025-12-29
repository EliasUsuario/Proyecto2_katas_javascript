//42-Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
// Es decir, intercambiar el lugar de un elemento por otro dentro del array. Retorna el array resultante.

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];
function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}

//Pruebas:

//Se intercambia "La antorcha humana" (0) con "La cosa" (3)
console.log("Original:", fantasticFour);
const resultado = swap(fantasticFour, 0, 3);
console.log("Intercambio 0 y 3:", resultado);

//Se intercambia "Mr. Fantástico" (1) con "La mujer invisible" (2)
swap(fantasticFour, 1, 2);
console.log("Intercambio 1 y 2:", fantasticFour);