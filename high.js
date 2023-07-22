function high(x) {
  const kata = x
    .split(" ")
    .map((k) => [...k].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));

  const as = kata.indexOf(Math.max(...kata));
  return x.split(" ")[as];
}

console.log(high("fuad nur sholehan"));
