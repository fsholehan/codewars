function sumMix(x) {
  let total = 0;
  x.forEach((angka) => {
    total += Number(angka);
  });
  return total;
}

console.log(sumMix([1, 2, "5"]));
