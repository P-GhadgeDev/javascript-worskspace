/* Template Strings (Template Literals) */
// Traditional String Concatenation
// const year = 2026;

// const message = "The year is " + year;

// console.log(message);
// The year is 2026

// Template String
// const year = 2026;

// const message = `The year is ${year}`;

// console.log(message);
// The year is 2026

/* Using Expressions Inside Template Strings */
function getMessage() {
  return `The year is ${new Date().getFullYear()}`;
}

console.log(getMessage());
// This year is 2026

/* Building JSON Strings */
// Without Template Strings

// Example similar to older PHP/JavaScript styles
// const data =
//   '{"device_id":"' +
//   device_id +
//   '","guid":"' +
//   guid +
//   '","username":"' +
//   username +
//   '"}';

// With Template Strings
// const device_id = 4;
// const guid = 20;
// const username = "hello";

// const data = `{"device_id":"${device_id}","guid":"${guid}","username":"${username}"}`;

// console.log(data);
// {"device_id":"4","guid":"20","username":"hello"}

/* Preferred Modern Approach */
// const device_id = 4;
// const guid = 20;
// const username = "hello";

// const data = {
//   device_id,
//   guid,
//   username,
// };

// console.log(JSON.stringify(data));
// {"device_id":4,"guid":20,"username":"hello"}

// Insert Variable
const name = "Alex";

console.log(`Hello ${name}`);
// Hello Alex

// Insert Expression
console.log(`2 + 3 = ${2 + 3}`);
// 2 + 3 = 5

// Insert Function Call
console.log(`Current Year: ${new Date().getFullYear()}`);
// Current Year: 2026

function getMessage() {
  return `The year is ${new Date().getFullYear()}`;
}

console.log(getMessage());
// The year is 2026

const device_id = 4;
const guid = 20;
const username = "hello";

const data = `{"device_id":"${device_id}","guid":"${guid}","username":"${username}"}`;

console.log(data);
// {"device_id":"4","guid":"20","username":"hello"}

const year = 2016;
const yearMessage = `The year is ${year}`;

console.log(yearMessage);
// The year is 2026
// {"device_id":"4","guid":"20","username":"hello"}
// The year is 2016

// Refactor the function below to use template strings instead of string concatenation.
// function doubleMessage(number) {
//   return "Your number doubled is " + (2 * number);
// }

function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}

console.log(doubleMessage(5));
// Your number doubled is 10

console.log(doubleMessage(8));
// Your number doubled is 16

// function fullName(firstName, lastName) {
//   return firstName + lastName;
// }

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullName("Alex", "Johnson"));
// Alex Johnson

console.log(fullName("John", "Doe"));
// John Doe
