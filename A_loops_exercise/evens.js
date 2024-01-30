// Write a function `evens(max)` that accepts a max number as an argument. The function should print
// all positive even numbers that are less than the max.

const evens = function (max) {
  for (let max = 1; max <= 11; max %= 2) {
    console.log(max);
  }
};

evens(11);
// prints
//  2
//  4
//  6
//  8
//  10

evens(8);
// prints
//  2
//  4
//  6
