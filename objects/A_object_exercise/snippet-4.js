// snippet 4
let recipe = {
  name: "Old Fashioned Pancakes",
  difficulty: "easy",
  tasty: true,
  ingredients: ["eggs", "milk", "butter", "flour", "sugar"],
};

console.log(recipe.name); //"Old Fashioned Pancakes"
console.log(recipe["name"]); //"Old Fashioned Pancakes"
console.log(recipe.ingredients.length); //5
console.log(recipe.calories); //undefined

let someVariable = "difficulty"; //easy
console.log(recipe[someVariable]); //undefined
console.log(recipe.someVariable);

for (let i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}
