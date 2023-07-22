function alphabetPosition(text) {
  const newText = text.split("").filter((tex) => tex !== " ");

  return newText.map((te, i) => {
    return te.charCodeAt(i) - 97;
  });
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
