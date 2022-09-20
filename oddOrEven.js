function oddOrEven(array) {
  if (array !== null && array.length !== 0) {
    const res = array.reduce((a, b) => a + b);
    if (res % 2 === 0) {
      return "even";
    }
    return "odd";
  }

  return "even";
}

console.log(oddOrEven([0]), "even");
console.log(oddOrEven([1]), "odd");
console.log(oddOrEven([]), "even");
