const areThereDuplicates = (...args) => {
  let counter = {};
  for (let val of args.toString()) {
    if (isAlphaNumeric(val)) {
      counter[val] ? (counter[val] += 1) : (counter[val] = 1);
    }
  }
  for (let key in counter) {
    if (counter[key] !== 1) {
      return true;
    }
  }
  return false;
};

const isAlphaNumeric = (str) => {
  let code;
  for (let i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
};
//   areThereDuplicates(1, 2, 3) // false
//   areThereDuplicates(1, 2, 2) // true
//   areThereDuplicates('a', 'b', 'c', 'a') // true

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates("a", "b", "c", "a"));
