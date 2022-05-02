// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function totalSum (param) {
  let sumNumber = 0;
  for (let value of param) {
    if(typeof value === 'number'){
      sumNumber += value 
    } else if (typeof value === 'string'){
      sumNumber += value.length
    }
  }
  return sumNumber 
}
console.log(totalSum(mixedElements))