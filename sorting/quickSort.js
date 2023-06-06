const sort = (arr, item1, item2) => {
  return ([arr[item1], arr[item2]] = [arr[item2], arr[item1]]);
};

const pivot = (arr, first = 0, last = arr.length - 1) => {
  let pivot = arr[first];
  let swpIdx = first;
  for (let i = first + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swpIdx++;
      sort(arr, i, swpIdx);
    }
  }
  sort(arr, first, swpIdx);
  console.log(arr);
  return swpIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

let arr = [5, 2, 1, 8, 4, 7, 6, 3];
console.log(quickSort(arr));
