const linearSearch = (array, val) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) return i;
  }
  return -1;
};

console.log(linearSearch([2, 4, 1, 5, 2, 44, 55], 5));
console.log(linearSearch([2, 4, 1, 5, 2, 44, 55], 88));
