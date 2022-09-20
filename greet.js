function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  }
  return "Hello guest";
}

console.log(greet("Fuad", "Fuad"));
console.log(greet("Fathan", "Doni"));
