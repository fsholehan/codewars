const reverseSeq = (n) => {
  let result = [];
  if (n > 0) {
    for (let i = n; i > 0; i--) {
      result.push(i);
    }
  }
  return result;
};

console.log(reverseSeq(5));
