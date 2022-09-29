function strCount(str, letter) {
  return str.split("").filter((s) => s === letter).length;
}

console.log(strCount("Hello", "o"));
console.log(strCount("Hello", "l"));
console.log(strCount("", "z"));
