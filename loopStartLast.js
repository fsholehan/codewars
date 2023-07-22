function loop(firstNumber, lastNumber) {
  let result = "";
  if(firstNumber < lastNumber) {
     for(i = firstNumber; i <= lastNumber; i++) {
    result += i
  }
  } else {
    return
  }
 
 return result
}

console.log(loop(1, 100))