//2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

const pointsListCopia = [...pointsList];
console.log(pointsListCopia); // [32, 54, 21, 64, 75, 43]

console.log(pointsList === pointsListCopia); // Verificación de que no son el mismo array (da false)

//2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyCopia = { ...toy };
console.log(toyCopia); //Comprobación de que la copia es correcta

console.log(toy === toyCopia); // Verificación de que no son el mismo objeto (da false)

//2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

const unionPoints = [...pointsList1, ...pointsList2];
console.log(unionPoints);// Resultado: [32, 54, 21, 64, 75, 43, 54, 87, 99, 65, 32]

//2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const fusion = { ...toy2, ...toyUpdate };

console.log(fusion); //comprobación de que la fusión es correcta

//2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const sinAmarillo = [
  ...colors.slice(0, 2), // Copia 'rojo' y 'azul'
  ...colors.slice(3)    // Copia 'verde' y 'naranja'
];

console.log(sinAmarillo); // Resultado: ['rojo', 'azul', 'verde', 'naranja']
console.log(colors); // Comprobación que el original sigue intacto.




