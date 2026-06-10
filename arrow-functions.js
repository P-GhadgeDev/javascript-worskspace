/* Normal Function */
// const add = function (a, b) {
//  return a + b;
// };

// console.log(add(1, 2));
// 3

/* Arrow Function */
// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(1, 2));
// 3

/* Single Expression Arrow Function */
// const add = (a, b) => a + b;

// console.log(add(1, 2));
// 3

// const newSum = add(1, 2);
// console.log(newSum);
// 3

/* Single Parameter Arrow Functions */
// const double = function (number) {
//   return 2 * number;
// };

// console.log(double(8));
// 16

// Arrow Function
// const double = (number) => {
//   return 2 * number;
// };

// console.log(double(8));
// 16

// Simplified Arrow Funtion
// const double = (number) => 2 * number;

// console.log(double(8));
// 16

// Multiple Parameters
// const double = (number1, number2) => {
//   return 2 * number1 + 2 * number2;
// };

// console.log(double(8, 4));
// 24

// No Parameters
// const double = () => {
//   return 2;
// };

// console.log(double());
// 2

/* Arrow Functions with Array Methods*/
// Using map()
// const numbers = [1, 2, 3];

// const doubledNumbers = numbers.map((number) => 2 * number);

// console.log(doubledNumbers);
// [2, 4, 6]

/* Arrow Functions and this */
const team = {
  members: ["Jane", "Bill"],
  teamName: "Super Squad",

  teamSummary: function () {
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  },
};

console.log(team.teamSummary());
// ["Jane is on team Super Squad", "Bill is on team Super Squad"];

/* Refactoring Keyword Functions to Fat Arrow Functions */
// The function below uses the function keyword.
// There's nothing wrong with using the function keyword here, but it might look a bit nicer if we refactor it to use the fat arrow syntax instead.
// Refactor the code below to use a fat arrow function.
// If the function has a single expression in its body, the curly braces {} and return keyword can be removed.
// If the function has a single argument, the parentheses around the argument list can be removed.

// const fibonacci = function (n) {
//   if (n < 3) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

const fibonacci = (n) => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(6));
// 8

console.log(fibonacci(8));
// 21

console.log(fibonacci(10));
// 55

/* Arrow Functions Aren't Always a Solution */

// Arrow functions bind the value of this to the surrounding context, and sometimes this isn't the behavior we expect.
// The code below has an object that represents a user's profile. The profile currently has a name property.
// Add another key to this object called getName.
// getName should be a function that returns the profile's name using this.name.
// Does the solution work with a fat arrow function, or will you have to use the function keyword instead?

// const profile = {
//   name: 'Alex'
// };

const profile = {
  name: "Alex",
  getName() {
    return this.name;
  },
};

console.log(profile.getName());
// Alex
