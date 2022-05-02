// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, 
// en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.

const nameFinder = [
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
function finderName(source, toSearch) {
  for (const name of source) {
    if(name === toSearch){
      return (`${name} is true and position ${source.indexOf(toSearch)}`)
    }
  }
  return 'Is False'
}
const search = finderName (nameFinder, 'Tutu')
console.log(search);