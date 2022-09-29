const number = (array) => {
  return array.map((arr, i) => `${i + 1}: ${arr}`);
};

console.log(number([]));
console.log(number(["a", "b", "c"]));
