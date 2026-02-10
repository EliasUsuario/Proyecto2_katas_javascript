//3.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map()
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users.map(user => user.name);
console.log(names); // Resultado: ['Abel', 'Julia', 'Pedro', 'Amanda']

//3.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


// Usamos map para transformar cada objeto en un string (el nombre)
const names2 = users2.map(user => {

  if (user.name.startsWith('A')) {  // Comprobación de si el nombre empieza por 'A'
    return 'Anacleto';
  } else {
    return user.name;
  }
});

console.log(names2); // Resultado: ['Anacleto', 'Julia', 'Pedro', 'Anacleto']

//3.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];

const updatedCities = cities.map(city => {
  if (city.isVisited) {
    
    return `${city.name} (Visitado)`;// Uso de template literals para concatenar el string
  }
  return city.name;
});

console.log(updatedCities);// ["Tokyo (Visitado)", "Madagascar", "Amsterdam (Visitado)", "Seul"]















