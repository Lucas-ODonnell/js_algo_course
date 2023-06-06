const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
};

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
};

console.log(merge([1, 4, 6, 8], [2, 3, 5, 7]));
console.log(merge([2, 3, 5, 7], [1, 4, 6, 8]));
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
