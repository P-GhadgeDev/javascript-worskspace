/* Rest & Spread Operator */

// function addNumbers(numbers) {
//   return numbers.reduce((sum, number) => {
//     return sum + number;
//   }, 0);
// }

// console.log(addNumbers([1, 2, 3, 4, 5]));
// 15;

// function addNumbers(a, b, c, d, e) {
//   const numbers = [a, b, c, d, e];
//   return numbers.reduce((sum, number) => {
//     return sum + number;
//   }, 0);
// }

// console.log(addNumbers(1,2,3,4,5));
// 15

/* Rest Operator */
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// 55

const defaultColors = ["red", "green"];
const userFavoriteColors = ["orange", "yellow"];
const fallColors = ["fire red", "fall orange"];

// defaultColors.concat(userFavoriteColors);
[...defaultColors, userFavoriteColors];
[...defaultColors, ...userFavoriteColors];
[...fallColors, ...defaultColors, ...userFavoriteColors];
["blue", ...fallColors, ...defaultColors, ...userFavoriteColors];
["green", "blue", ...fallColors, ...defaultColors, ...userFavoriteColors];

function validareShoppingList(...items) {
  if (items.indexOf("milk") < 0) {
    return ["milk", ...items];
  }
  return items;
}

validareShoppingList("oranges", "bread", "eggs");

const MathLibrary = {
  // calculateProduct(a,b){
  calculateProduct(...rest){
    console.log('Please use the multiply method instead');
  // return a * b;
  return this.multiply(...rest);
  },
  multiply(a, b){
    return a * b;
  }
}