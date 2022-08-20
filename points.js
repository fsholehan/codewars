function points(games) {
  let point;
  const result = games.map((num) => {
    if (Number(num.charAt(0)) > Number(num.charAt(2))) {
      return (point = 3);
    } else if (Number(num.charAt(0)) === Number(num.charAt(2))) {
      return (point = 1);
    } else {
      return (point = 0);
    }
  });

  return result.reduce((x, y) => x + y);
}

console.log(
  points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])
);
