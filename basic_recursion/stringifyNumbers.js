const stringifyNumbers = (obj) => {
  let newObject = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObject[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObject[key] = stringifyNumbers(obj[key]);
    } else {
      newObject[key] = obj[key];
    }
  }
  return newObject;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
