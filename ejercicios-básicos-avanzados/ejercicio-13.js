//13- Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. 
// Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, nameBuscar) {
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] === nameBuscar) {
      return "true, posición: " + i;
    }
  }
  return false;
}

// --- PRUEBA DE LA FUNCIÓN ---

const prueba1 = nameFinder(names, "Tony");
console.log("prueba de Tony:", prueba1);

const prueba2 = nameFinder(names, "Natasha");
console.log("prueba de Natasha:", prueba2);

const prueba3 = nameFinder(names, "Magneto");
console.log("prueba de NoExiste:", prueba3);