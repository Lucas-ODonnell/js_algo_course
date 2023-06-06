//sliding window
const minSubArrayLen = (nums, sum) => {
  let minLen = Infinity;
  let total = 0;
  let start = 0;
  let last = 0;
  while (start < nums.length) {
    //if total is less then the sum add it to total
    if (total < sum && last < nums.length) {
      total += nums[last];
      last += 1;
      //now if it's greater than the sum remove nums[start] and start goes up by 1
    } else if (total >= sum) {
      minLen = Math.min(minLen, last - start);
      total -= nums[start];
      start += 1;
    } else {
      break;
    }
  }
  //if it's infinity nothing happened so return 0 not Infinity
  return minLen === Infinity ? 0 : minLen;
};
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
