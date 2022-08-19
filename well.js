function well(x) {
  const good = x.includes("good");

  if (good > 2) {
    return "Publish!";
  }
}

console.log(well(["good", "good", "good", "bad", "bad", "bad", "bad"]));
