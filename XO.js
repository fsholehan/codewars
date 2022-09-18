function XO(str) {
  let x = 0,
    o = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      x++;
    } else if (str[i].toLowerCase() === "o") {
      o++;
    }
  }

  console.log(x, "x");
  console.log(o, "o");
  return x === o;

  // const newStr = str.split("x").length;

  // return newStr;
}

console.log(XO("xo"), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);
