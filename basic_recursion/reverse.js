const reverse = (str) => {
  if (str === "") return str;
  return reverse(str.substring(1)) + str.charAt(0);
};

console.log(reverse("awesome"));
//reverse("wesome") + "a"
//(reverse("esome") + "w") + "a"
//(reverse("some") + "e" + "w") + "a"
//(reverse("ome") + "s" + "e" + "w") + "a"
//(reverse("me") + "o" + "s" + "e" + "w") + "a"
//(reverse("e") + "m" + "o" + "s" + "e" + "w" + "a")
//(reverse() + "e" + "m" + "o" + "s" + "e" + "w" + "a");
//("emosewa");
