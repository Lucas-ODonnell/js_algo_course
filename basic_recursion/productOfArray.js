const productOfArray = (array) => {
  if (array.length === 1) return array;
  return array[0] * productOfArray(array.slice(1));
};

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));
