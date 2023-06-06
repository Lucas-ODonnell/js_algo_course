const insertSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i];
    let index = i;
    for (let j = i - 1; j >= 0; j--) {
      if (currentVal < array[j]) {
        array[j + 1] = array[j];
        index = j;
      } else {
        break;
      }
    }
    array[index] = currentVal;
  }
  return array;
};
console.log(insertSort([10, 2, 33, 17, 55, 22, 56, 45, 77, 100, 2]));
console.log(insertSort([10, 2, 33, 17, 55, 22, 56, 45, 77, 100, 2]));
