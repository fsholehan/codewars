function loopOdd(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 == 0) {
      return console.log("genap");
    } else {
      return console.log("ganjil");
    }
  }
}

console.log(loopOdd(9));
