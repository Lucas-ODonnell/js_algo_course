const binarySearch = (array, val) => {
  if (array.length <= 1) return -1;
  let middle = Math.floor(0 + array.length - 1 / 2);
  if (array[middle] === val) return middle;
  if (array[middle] < val) {
    return binarySearch(array.slice(middle), val);
  } else if (array[middle] > val) {
    return binarySearch(array.slice(0, middle), val);
  }
};

//iterative version
//const binarySearch = (array, val) => {
//  let first = 0;
//  let last = array.length - 1;
//  let middle = Math.floor((first + last) / 2);
//  while (array[middle] !== val && first <= last) {
//    if (array[middle] < val) first = middle + 1;
//    else last = middle - 1;
//    middle = Math.floor((first + last) / 2);
//  }
//  return array[middle] === val ? middle : -1;
//};
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
