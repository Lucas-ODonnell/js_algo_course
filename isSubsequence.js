const isSubsequence = (str1, str2) => {
  let i = 0;
  for (let j = 0; j < str2.length; j++) {
    if (i === str1.length - 1) return true;

    if (str2[j] === str1[i]) {
      i += 1;
    }
  }
  return false;
};
console.log(isSubsequence("hello", "hello world")); // true isSubsequence('sing', 'sting'); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
