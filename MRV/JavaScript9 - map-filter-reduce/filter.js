function filtraPares(arr) {
  return arr.filter(function (item) {
    return item % 2 === 0;
  });
}

const meuArray = [1, 2, 3, 5, 6, , 7, 9, 11];

console.log(filtraPares(meuArray));
