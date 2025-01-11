function isPorDebajoDeCero(...arrayGrados) {
  for (let i = 0; i < arrayGrados.length; i++) {
    if (arrayGrados[i] < 0) {
      return true;
    } 
  } 
  return false;
}

//.some ejecuta el "callback" por cada elemento hasta que uno de ellos da true.
function isPorDebajoDeCero2(...arrayGrados) {
  return arrayGrados.some((a) => a < 0);
}

//Descomprimir
//const a = [2, 3, 7, 6]
//console.log(Math.max(...a));

console.log(isPorDebajoDeCero(22, 5, 13, 0, 35));
console.log(isPorDebajoDeCero(15, 3, -4, 8, -2, 10, 14, 16));
console.log(isPorDebajoDeCero());

console.log(isPorDebajoDeCero2(22, 5, 13, 0, 35));
console.log(isPorDebajoDeCero2(15, 3, -4, 8, -2, 10, 14, 16));
console.log(isPorDebajoDeCero2());