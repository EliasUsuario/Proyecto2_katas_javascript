//38- Dado el siguiente código usa forof y forin para hacer la media del volumen de todos los 
//sonidos favoritos que tienen los usuarios. Es decir, la media de volumen de todos los volumenes juntos.

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
let sumaTotalVolumen = 0;
let totalSonidos = 0;

for (const usuario of users) {
  for (const nombreSonido in usuario.favoritesSounds) {
    const volumenActual = usuario.favoritesSounds[nombreSonido].volume;
    sumaTotalVolumen += volumenActual;
    totalSonidos++;
  }
}

const mediaVolumen = sumaTotalVolumen / totalSonidos;

console.log("Total de sonidos procesados: " + totalSonidos);
console.log("La media de volumen de todos los sonidos es: " + mediaVolumen);