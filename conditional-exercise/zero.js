// snippet 0-1
if (true) {
  //true
  console.log("foo"); //print
}

if (false) {
  console.log("bar");
}

// snippet 0-2
if (false || false) {
  //false
  console.log("boop");
}

if (true || false) {
  //true
  console.log("beep"); //print
}

// snippet 0-3
let num = 40;

if (num > 0) {
  //true
  console.log("zip"); //print
}

if (num % 2 === 0) {
  //true
  console.log("zoop"); //print
}

// snippet 0-4
let word = "jeep";

if (word[0] === "d") {
  //false
  console.log("yer");
} else {
  console.log("nah"); //print
}

// snippet 0-5
let sentence = "roger that"; // count char letters space adds 1 char

if (sentence[sentence.length - 1] === "t") {
  console.log("ends in t"); //print
} else {
  console.log("does not end in t");
}

if (sentence.length <= 4) {
  console.log("short");
} else {
  console.log("long"); //print
}
