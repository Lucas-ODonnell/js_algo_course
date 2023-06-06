const getDigit = (num, pos) => {
  return Math.floor((num / Math.pow(10, pos - 1)) % 10);
};

const numCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count = Math.max(count, numCount(array[i]));
  }
  return count;
};

const radixSort = (nums) => {
  for (let i = 0; i < mostDigits(nums); i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      let correctBucket = getDigit(nums[j], i);
      digitBuckets[correctBucket].push(nums[j]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(getDigit(12345, 0)); // 5
console.log(numCount(123456789));
console.log(mostDigits([1, 2, 4, 55, 123, 43]));
console.log(radixSort([12, 54, 664, 234, 8585, 3345, 2, 663, 6]));
