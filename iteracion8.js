// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
function repeatCounter(source) {
  const counter = {};
  for (const word of source) {
    if (counter[word]) {
      counter[word]++
    } else {
      counter[word] = 1;
    }
  }
  return counter
}

const palabritas = repeatCounter(counterWords)
console.log(palabritas);
