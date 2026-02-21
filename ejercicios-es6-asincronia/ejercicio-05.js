/*Dado el siguiente javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// Busqueda del input en el HTML y guardado en variable:
const miInput = document.querySelector('[data-function="toFilterStreamers"]');

// Creacion de funcion que se encargara de filtrar y guardado de resultado:
function filtrar() {
    const palabraEscrita = miInput.value;
  // Filtración del array, si el nombre del streamer contiene la palabra escrita, lo devuelve:
    const resultado = streamers.filter(function(streamer) {
    return streamer.name.includes(palabraEscrita);
    });

    console.log(resultado);
}

// Al escribir el usuario en el input, se ejecuta la función:
miInput.addEventListener('input', filtrar);

