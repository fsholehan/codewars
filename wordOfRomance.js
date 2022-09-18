function wordOfRomance(num) {
  let result = "";
  while (num > 0) {
    if (num < 4) {
      result += "I";
      --num;
    } else if (num === 4) {
      result += "IV";
      num -= 4;
    }
  }
  return result;
}

console.log(wordOfRomance(4));
