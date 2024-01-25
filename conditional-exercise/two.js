//snippet 2-1
let nonsence = "blog trust fund tattooed williamsburg poke roof party";
let hasOk = nonsence.indexOf("ok") > -1;

if (hasOk) {
  //true
  console.log("yeet"); //print
} else if (nonsence.length > 10) {
  console.log("yo");
} else {
  console.log("no");
}

let hasZoo = nonsence.indexOf("zoo") > -1; //false
let hasFun = nonsence.indexOf("fun") > -1;

if (hasZoo && hasOk) {
  console.log("cool");
} else if (hasOk) {
  console.log("rad"); //print
} else if (hasFun) {
  console.log("dope");
} else {
  console.log("nope");
}

//snippet 2-2

let q = 25;
if (9 % 3 === 0 && 9 % 5 === 0) {
  console.log("both");
} else if (q % 3 === 0 || q % 5 === 0) {
  console.log("either");
}
