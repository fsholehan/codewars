// Sum Numbers
function sum(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((a, b) => a + b);
}

console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);
