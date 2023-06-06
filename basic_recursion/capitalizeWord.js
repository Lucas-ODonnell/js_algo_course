const capitalizedWords = (words, array = []) => {
  if (words.length === 0) return array;
  let current = words[0];
  array.push(current.slice(0, current.length).toUpperCase());
  return capitalizedWords(words.slice(1), array);
};

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
