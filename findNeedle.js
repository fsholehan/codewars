function findNeedle(haystack) {
  let index = 0;

  if (haystack.includes("needle")) {
    index = haystack.indexOf("needle");
  }

  return `found the needle at position ${index}`;
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
