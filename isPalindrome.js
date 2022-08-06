function isPalindrome(x) {

  for (let i = 0; i < x.length; i++) {
    let firstWord = i;
    let lastWord = x.length - i - 1;

    if (x.charAt(firstWord) !== x.charAt(lastWord)) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("Bob"));
console.log(isPalindrome("obo"));
