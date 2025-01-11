function fahrenheitACelsius(arrayGrados) {
  let arrayFinal = [];
  for (let i = 0; i < arrayGrados.length; i++) {
    let grados = arrayGrados[i];
    let gradosF = ((grados - 32) * 5) / 9;
    arrayFinal.push(gradosF);
  }
  return arrayFinal;
}

//Solo para cuando quieres empezar iterando en 0 y sumando de 1 en 1.
function fahrenheitACelsiusForEach(arrayGrados) {
  let arrayFinal = [];
  for (let grados of arrayGrados) {
    let gradosF = ((grados - 32) * 5) / 9;
    arrayFinal.push(gradosF);
  }
  return arrayFinal;
}

//Empieza en 0, va de 1 en 1 y hace todos los elementos del array.
function fahrenheitACelsiusForEach2(arrayGrados) {
  let arrayFinal = [];
  arrayGrados.forEach(grados => {
    let gradosF = ((grados - 32) * 5) / 9;
    arrayFinal.push(gradosF);
  });
  return arrayFinal;
}

//El map mapea una estructura a otra ej: console.log([1, 2 , 3].map(n=>n*2));
function fahrenheitACelsiusMap(arrayGrados) {
  return arrayGrados.map(grados => {
    return ((grados - 32) * 5) / 9;
  })
}

console.log(fahrenheitACelsius([68, 50, 46.4, 39, 90]));
console.log(fahrenheitACelsius([20, 0, -10]));
console.log(fahrenheitACelsius([]));

console.log(fahrenheitACelsiusForEach([68, 50, 46.4, 39, 90]));
console.log(fahrenheitACelsiusForEach([20, 0, -10]));
console.log(fahrenheitACelsiusForEach([]));

console.log(fahrenheitACelsiusForEach2([68, 50, 46.4, 39, 91]));
console.log(fahrenheitACelsiusForEach2([20, 0, -10]));
console.log(fahrenheitACelsiusForEach2([]));

console.log(fahrenheitACelsiusMap([68, 50, 46.4, 39, 90]));
console.log(fahrenheitACelsiusMap([20, 0, -10]));
console.log(fahrenheitACelsiusMap([]));
