const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let objectCounter = {};
  for (let val of str1) {
    objectCounter[val] ? (objectCounter[val] += 1) : (objectCounter[val] = 1);
  }
  for (let val of str2) {
    if (!objectCounter[val]) {
      return false;
    }
    objectCounter[val] -= 1;
  }
  return true;
};

console.log(validAnagram("mom", "omo"));
console.log(validAnagram(" ", " "));
console.log(validAnagram("bare", "bear"));
