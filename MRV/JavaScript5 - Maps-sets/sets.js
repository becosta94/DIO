function retornarUnico(array) {
  const final = new Set(array);
  return [...final];
}

const inicial = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(retornarUnico(inicial));
