const capitalizeFirst = (array) => {
  let answer = [];
  const recursiveCapitalizeFirst = (array) => {
    if (array.length === 0) return array;
    let string = array[0];
    string = string[0].toUpperCase() + string.slice(1);
    answer.push(string);
    return recursiveCapitalizeFirst(array.slice(1));
  };
  recursiveCapitalizeFirst(array);
  return answer;
};

//better solution
const capitalizeWords = (array) => {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
};
console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
