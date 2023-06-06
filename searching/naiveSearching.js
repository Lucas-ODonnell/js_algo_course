const naiveString = (string1, string2) => {
  if (string2.length > string1.length) return 0;
  let j = 0;
  let answer = 0;
  for (let i = 0; i < string1.length; i++) {
    if (j === string2.length - 1) {
      answer += 1;
      j = 0;
    } else if (string1[i] === string2[j]) {
      j += 1;
    } else {
      j = 0;
    }
  }
  return answer;
};

//alternative
const naiveStringAltVersion = (long, short) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (j === short.length - 1) count += 1;
    }
  }
  return count;
};
console.log(console.log(naiveString("womgzomg", "omg"))); // 2
console.log(console.log(naiveStringAltVersion("lorie loled", "lo"))); //1
