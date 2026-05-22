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

console.log(addNumbers(1,2,3,4,5,6,7,8,9,10));
// 55
