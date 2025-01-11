function fecha(dateT) {
  let partes = dateT.split("-");
  console.log(partes);
  const date = new Date(partes[2], partes[1] - 1, partes[0]);
  console.log(date);
  if (date == "Invalid Date") {
    return "Fecha no válida";
  }
  return new Intl.DateTimeFormat("es-ES", { dateStyle: "full" }).format(date); 
}

console.log(fecha("20-12-2012"));
console.log(fecha("2-1-2024"));
console.log(fecha("2-2024"));
console.log(fecha("40-5-24"));
