function abbrevName(name) {
  const newName = name.split(" ");

  const result = `${newName[0][0]}.${newName[1][0]}`;

  return result;
  // return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

console.log(abbrevName("Fuad Nur"));
