function fixTheMeerkat(arr) {
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
  // return arr.reverse();
  // return [head, body, tail]
}

console.log(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
console.log(fixTheMeerkat(["tails", "body", "heads"]), [
  "heads",
  "body",
  "tails",
]);
console.log(fixTheMeerkat(["bottom", "middle", "top"]), [
  "top",
  "middle",
  "bottom",
]);
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]), [
  "upper legs",
  "torso",
  "lower legs",
]);
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]), [
  "sky",
  "rainbow",
  "ground",
]);
