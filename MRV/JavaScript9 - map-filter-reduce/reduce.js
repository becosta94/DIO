function somarNumeros(arr) {
  return arr.reduce(function (anterior, proximo) {
    console.log({ anterior });
    console.log({ proximo });
    return anterior + proximo;
  }, 0);
}

const myArray = [1, 2];

console.log(somarNumeros(myArray));
