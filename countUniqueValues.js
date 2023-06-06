//const countUniqueValues = (array) => {
//  if (!array || !array.length) return 0;
//  let answer = 0;
//  let first = 0;
//  let second = 0;
//  while (second <= array.length) {
//    if (array[first] !== array[second]) {
//      first = second;
//      answer += 1;
//    }
//    second += 1;
//  }
//  return answer;
//};

//const countUniqueValues = (array) => {
//  if (!array || !array.length) return 0;
//  let i = 0;
//  let j = 1;
//  while (j <= array.length) {
//    if (array[i] !== array[j]) {
//      array.splice(i + 1, 0, array[j]);
//      i += 1;
//    }
//    j += 1;
//  }
//  return i;
//};

const countUniqueValues = (array) => {
  if (!array || !array.length) return 0;
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i += 1;
      array[i] = array[j];
    }
  }
  return i + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 3]));
