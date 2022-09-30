function findDifference(a, b) {
  const res1 = a.reduce((num1, num2) => num1 * num2);
  const res2 = b.reduce((num1, num2) => num1 * num2);

  return Math.abs(res1 - res2);
}

console.log(findDifference([3, 2, 5], [1, 4, 4]), 14);
console.log(findDifference([9, 7, 2], [5, 2, 2]), 106);
console.log(findDifference([11, 2, 5], [1, 10, 8]), 30);
console.log(findDifference([4, 4, 7], [3, 9, 3]), 31);
console.log(findDifference([15, 20, 25], [10, 30, 25]), 0);
