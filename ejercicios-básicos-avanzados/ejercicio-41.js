//41-Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado 
// que deberá simular el codigo dentro de la función.Que la función use el parametro para simular una tirada de dado y 
// retornar el resultado. Busca información sobre la función de JavaScript Math.random()

function dados(caras) {
  const resultado = Math.floor(Math.random() * caras) + 1;
  return resultado;
}
// Prueba con dado clásico de 6 caras:
console.log("Has sacado un: " + dados(6));

// Prueba con dado de 10 caras:
console.log("Has sacado un: " + dados(10));

// Prueba con dado de 25 caras:
console.log("Has sacado un: " + dados(25));