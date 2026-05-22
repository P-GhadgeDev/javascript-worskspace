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