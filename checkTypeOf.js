function checkTypeof(args) {
  if (typeof args == "string") {
    return "Undefined";
  }
  return args;
}

console.log(checkTypeof("string"));
