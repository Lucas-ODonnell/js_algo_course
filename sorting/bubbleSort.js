const swap = (array, idx1, idx2) => {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
};

const bubbleSort = (array) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      let j = i + 1;
      if (array[i] > array[j]) {
        swap(array, i, j);
        sorted = false;
      }
    }
  }
  return array;
};

const bubbleSortAlt = (array) => {
  let sorted;
  for (let i = array.length; i >= 0; i--) {
    sorted = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        sorted = false;
      }
    }
    if (sorted) break;
  }
  return array;
};

console.log(bubbleSort([10, 2, 33, 17, 55, 22, 56, 45, 77, 100, 2]));
console.log(bubbleSortAlt([10, 2, 33, 17, 55, 22, 56, 45, 77, 100, 2]));
