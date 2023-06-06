const sameFrequency = (num1, num2) => {
  let counter = {};
  for (let val of num1.toString()) {
    counter[val] ? (counter[val] += 1) : (counter[val] = 1);
  }
  for (let val of num2.toString()) {
    if (!counter[val]) {
      return false;
    }
    counter[val] -= 1;
  }
  return true;
};

//sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
//sameFrequency(22,222) // false

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
