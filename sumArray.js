function sumArray(array) {
  if (array !== null && array.length !== 0 && array.length > 2) {
    return array.reduce((a, b) => a + b);
  }
  return 0;
}

console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([3, 5]));
console.log(sumArray([6, 2, 1, 8, 10]));
