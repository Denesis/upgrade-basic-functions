// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers1 = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let sumProm = 0;
  
  for (let value of param) {
    sumProm += value
  }
  
  return sumProm / param.length
}
console.log(average(numbers1));