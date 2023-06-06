function same(arr1, arr2) {
  //same([1,2,3], [4,1,9]
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 1, 3]));
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
