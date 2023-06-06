const flatten = (array) => {
  let answer = [];

  const recursiveFlatten = (array) => {
    if (array.length === 0) return array;
    let head = array[0];
    let body = array.slice(1);
    if (Array.isArray(head)) return recursiveFlatten(head.concat(body));
    answer.push(head);
    return recursiveFlatten(body);
  };

  recursiveFlatten(array);
  return answer;
};

//alternate solution
function flatten(oldArr) {
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
