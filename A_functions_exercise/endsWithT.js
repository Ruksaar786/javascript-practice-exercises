//write a Function `endsWithT` that accepts a string as an argument. The function should return
//Boolean indicating whether or not the string end with the character 't.

const endsWithT = function (str) {
  let lastChar = str[str.length - 1];
  if (lastChar === "t") {
    return true;
  } else return false;
};

console.log(endsWithT("smart")); //true
console.log(endsWithT("racket")); //true
console.log(endsWithT("taco")); //false
console.log(endsWithT("boomerang")); //false
