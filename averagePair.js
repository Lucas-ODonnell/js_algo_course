const averagePair = (array, bool) => {
  if (!array || !array.length) return false;
  let target = bool * 2;
  let answerObject = {};
  for (let i = 0; i < array.length; i++) {
    if (answerObject[target - array[i]]) {
      return true;
    }
    answerObject[array[i]] = 1;
  }
  return false;
};

//put array[index] into the answerObject, value doesn't matter.
//Average is the two numbers divided by two. Instead multiple average by 2 to get target
//if target - array[i] is a key in the answerObject it is true
//For example target is 16 array[i] = 10
//16-10 is 6
//{6:"whatever"}
//6 is in the object

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 6, 6, 7, 10, 12, 19, 10], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
