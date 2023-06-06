const swap = (arr, i, min) => {
  [arr[i], arr[min]] = [arr[min], arr[i]];
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (arr[min] < arr[i]) {
      swap(arr, i, min);
    }
  }
  return arr;
};
console.log(selectionSort([10, 2, 33, 17, 55, 22, 56, 45, 77, 101, 2]));
