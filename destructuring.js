/* Destructuring */
var expense = {
  type: "Business",
  amount: "$45 USD",
};

var type = expense.type;
var amount = expense.amount;

/* ES6 */

const { type, amount } = expense;
// Buisness, $45 USD

const { amount } = expense;
// $45 USD

// var savedFiled = {
//   extension: "jpg",
//   name: "repost",
//   size: 14040,
// };

// function fileSummary(file) {
//   return `The file ${file.name}.${file.extension} is of size ${file.size}`;
// }

// fileSummary(savedFiled);

// var savedFiled = {
//   extension: "jpg",
//   name: "repost",
//   size: 14040,
// };

// function fileSummary({ name, extension, size }) {
//   return `The file ${name}.${extension} is of size ${size}`;
// }

// fileSummary(savedFiled);

var savedFiled = {
  extension: "jpg",
  name: "repost",
  size: 14040,
};

function fileSummary({ name, extension, size }, { color }) {
  return `${color} The file ${name}.${extension} is of size ${size}`;
}

fileSummary(savedFiled, { color: "red" });
