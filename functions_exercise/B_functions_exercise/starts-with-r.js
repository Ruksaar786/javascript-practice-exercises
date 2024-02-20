//write a function `startsWithR` that accepts a string as an argument and returns a boolean indicating
//whether or not the string starts with 'r' or 'R'

const startsWithR = function (str) {
  let firstChar = str[0];
  if (firstChar === "r" || firstChar === "R") {
    return true;
  } else {
    return false;
  }
};

console.log(startsWithR("roger that"));
console.log(startsWithR("Row , row, row your boat"));
console.log(startsWithR("slip"));
console.log(startsWithR("Taxicab"));
