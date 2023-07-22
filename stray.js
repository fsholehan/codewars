function stray(numbers) {
  return numbers.find(
    (number) => numbers.filter((n) => number === n).length === 1
  );
}

console.log(stray([1, 1, 2]), 2);
console.log(stray([17, 17, 17, 4]), 4);
