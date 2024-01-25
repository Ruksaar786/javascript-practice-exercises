//snippet 1-0
let qty = 38;

if (qty > 30 && qty % 5 === 4) {
  console.log("swish");
} else {
  console.log("swoosh"); //print
}

if (qty > 0) {
  console.log("pos");
}

//snippet 1-1
let a = "celery";
let b = "SQUASH";

if (a === a.toUpperCase()); //false
{
  console.log("alpha");
}

if (b === b.toUpperCase()); //true
{
  console.log("beta"); //print
}

//snippet 1-2
let number = 9;

if (number > 4) {
  // true
  console.log("ding"); //print
} else if (number % 3 === 0) {
  console.log("dong");
}

//snippet 1-3

let z = 12;

if (z > 10) {
  //true
  console.log("vroom"); //print

  if (z % 3 === 0) {
    //true
    console.log("skrrt");
  }
}
