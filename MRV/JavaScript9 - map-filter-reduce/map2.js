function mapSemThis(arr) {
  return arr.map(function (item) {
    return item * 2;
  });
}

const nums = [1, 2, 3, 4];

console.log(mapSemThis(nums));
console.log(nums);
