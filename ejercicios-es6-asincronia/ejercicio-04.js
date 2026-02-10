//4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const adultos = ages.filter(age => age > 18);// Filtrado de los números que sean mayores a 18
console.log(adultos); // Resultado: [22, 24, 55, 65, 21, 90]

//4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const evenAges = ages2.filter(age => age % 2 === 0);// Filtrado de los números cuyo resto al dividir por 2 sea 0
console.log(evenAges); // Resultado: [22, 14, 24, 12, 90]


















