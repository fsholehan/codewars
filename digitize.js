function digitize(n) {
  const arr = Array.from(String(n), Number);
  return arr.reverse();
}

console.log(digitize(12345));
