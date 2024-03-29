// Write a function `mostCommonLetter` that accepts a string as an argument. The function should return
// the character that appears most frequently in the string. You can assume that there are no ties.

const mostCommonLetter = function (str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj.hasOwnProperty(char)) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
};

console.log(mostCommonLetter("building")); // 'i'
console.log(mostCommonLetter("shoestring")); // 's'
console.log(mostCommonLetter("preparedness")); // 'e'
