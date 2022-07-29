function isPrime(num) {
  while (num > 0 && num > 2) {
    if (num % 1 === 0) {
      return true;
    }
  }
  return false;
}

console.log(isPrime(73));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(75));
