//12- Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
// en caso que existan los elimina para retornar un array sin los elementos duplicados.
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
  const listaUnica = [];
  for (let elemento of list) {
    if (!listaUnica.includes(elemento)) {
      listaUnica.push(elemento);
    }
  }
  return listaUnica;
}
const sinDuplicados = removeDuplicates(duplicates);
console.log("Lista sin duplicados:", sinDuplicados);