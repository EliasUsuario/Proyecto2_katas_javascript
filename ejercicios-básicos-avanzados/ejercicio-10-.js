//10- Calcular un promedio
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let total = 0;
  for (let num of numberList) {
    total += num;
  }
  let promedio = total / numberList.length;
  return promedio;
}
console.log(average(numbers));