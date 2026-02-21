//4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const adultos = ages.filter(age => age > 18);// Filtrado de los números que sean mayores a 18
console.log(adultos); // Resultado: [22, 24, 55, 65, 21, 90]

//4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const evenAges = ages2.filter(age => age % 2 === 0);// Filtrado de los números cuyo resto al dividir por 2 sea 0
console.log(evenAges); // Resultado: [22, 14, 24, 12, 90]

//4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const filtroStreamers = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log(filtroStreamers);

//4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. 
// Recomendamos usar la funcion .includes() para la comprobación.
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersConU = streamers2.filter(streamer => streamer.name.includes('u'));

console.log(streamersConU);

//4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. 
// Recomendamos usar la funcion.includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando.age sea mayor que 35.

const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const filteredStreamers = streamers3
  .filter(streamer3 => streamer3.gameMorePlayed.includes('Legends'))
  .map(streamer3 => {
    if (streamer3.age > 35) {
      return { 
        ...streamer3, 
        gameMorePlayed: streamer3.gameMorePlayed.toUpperCase() 
      };
    }
    return streamer;
  });

console.log(filteredStreamers);







