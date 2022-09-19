function getCount(str) {
  const vocal = {
    a: "a",
    i: "i",
    u: "u",
    e: "e",
    o: "o",
  };
  const len = str.split("").filter((voc) => voc.includes(vocal[voc]));
  return len.length;
}

console.log(getCount("abracadabra"));
