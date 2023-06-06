const isPalindrome = (str) => {
  const orig = str;
  const recursive = (str) => {
    if (str === "") return str;
    return recursive(str.substring(1)) + str.charAt(0);
  };
  if (orig === recursive(str)) return true;
  return false;
};

console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));
