/* var */
// var color = 'red';

// console.log(color);
// red

// var name = 'Jane';
// console.log(name);
// Jane

// var title = 'Sotfware Engineer';
// console.log(title);
// Software Engineer

// var hourlyWage = 40;
// console.log(hourlyWage);
// 40

/* ES6 */

/* const */
const name = "Jane";
console.log(name);
//Jane

/* let */
let title = "Software Engineer";
console.log(title);
// Software Engineer

let hourlyWage = 40;
console.log(hourlyWage);
// 40

title = "Senior Engineer";
console.log(title);
// Senior Engineer

hourlyWage = 45;
console.log(hourlyWage);
// 45

// function count(targetString) {
//   var characters = ["a", "e", "i", "o", "u"];
//   var number = 0;

//   for (var i = 0; i < targetString.length; i++) {
//     if (characters.includes(targetString[i])) {
//       number++;
//     }
//   }
//   return number;
// }

// console.log(count("aeiobzxceiaipbiox"));

function count(targetString) {
  const characters = ["a", "e", "i", "o", "u"];
  let number = 0;

  for (let i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }
  return number;
}

console.log(count("aeiobzxceiaipbiox"));

// function buildExpressions(code) {
//   var transformedCode = JSXTransformer.transform(code).code;
//   console.log("Transformed Code:");
//   console.log(transformedCode);

//   var codeByLine = transformedCode.split("\n");
//   console.log("Code By Line:", codeByLine);

//   var tokenized = esprima.tokenize(transformedCode, { loc: true });
//   console.log("Tokens:", tokenized);

//   var parens = {
//     "(": 0,
//     "{": 0,
//     "[": 0,
//   };

//   var wasOpen = false;

//   var exp = _.reduce(
//     tokenized,
//     (expressions, { value, loc: { end } }, index) => {
//       console.log(`Token ${index}: ${value}`);

//       var lineNumber = end.line;
//       var lineContents = codeByLine[lineNumber - 1];

//       console.log("Line Number:", lineNumber);
//       console.log("Line Content:", lineContents);

//       var lineHasMoreDelimiters = this.lineHasMoreDelimiters(end, lineContents);

//       console.log("lineHasMoreDelimiters:", lineHasMoreDelimiters);

//       if (expressions[lineNumber]) {
//         return expressions;
//       }

//       if (OPEN_DELIMITERS.includes(value)) {
//         parens[value] += 1;
//         wasOpen = true;
//         console.log("Opening Delimiter:", value);
//       }

//       if (CLOSE_DELIMITERS.includes(value)) {
//         parens[DELIMITER_MAP[value]] -= 1;
//         console.log("Closing Delimiter:", value);
//       }

//       console.log("Current Parens:", parens);

//       if (
//         !lineHasMoreDelimiters &&
//         wasOpen &&
//         _.every(parens, (count) => count === 0)
//       ) {
//         wasOpen = false;

//         expressions[lineNumber] = _.take(codeByLine, lineNumber).join("\n");

//         console.log(`Expression completed at line ${lineNumber}`);
//       }

//       return expressions;
//     },
//     {},
//   );

//   console.log("Final Expressions:", exp);

//   return exp;
// }

function buildExpressions(code) {
  const transformedCode = JSXTransformer.transform(code).code;
  const codeByLine = transformedCode.split("\n");
  const tokenized = esprima.tokenize(transformedCode, { loc: true });

  const parens = {
    "(": 0,
    "{": 0,
    "[": 0,
  };

  let wasOpen = false;

  const exp = _.reduce(
    tokenized,
    (expressions, { value, loc: { end } }) => {
      const lineNumber = end.line;
      const lineContents = codeByLine[lineNumber - 1];

      const lineHasMoreDelimiters = this.lineHasMoreDelimiters(
        end,
        lineContents,
      );

      const endOfLine = end.column === lineContents.length;

      if (expressions[lineNumber]) {
        return expressions;
      }

      if (OPEN_DELIMITERS.includes(value)) {
        parens[value] += 1;
        wasOpen = true;
      }

      if (CLOSE_DELIMITERS.includes(value)) {
        parens[DELIMITER_MAP[value]] -= 1;
      }

      if (
        !lineHasMoreDelimiters &&
        wasOpen &&
        _.every(parens, (count) => count === 0)
      ) {
        wasOpen = false;

        expressions[lineNumber] = _.take(codeByLine, lineNumber).join("\n");

        return expressions;
      }

      return expressions;
    },
    {},
  );

  return exp;
}

// The following code uses var instead of const and let.
// Refactor the code to use the new keywords.
// Be sure to consider whether each variable should be declared using const or let depending on whether the variable gets reassigned or not.

// var statuses = [
//   { code: "OK", response: "Request successful" },
//   { code: "FAILED", response: "There was an error with your request" },
//   { code: "PENDING", response: "Your reqeust is still pending" },
// ];
// var message = "";
// var currentCode = "OK";

// for (var i = 0; i < statuses.length; i++) {
//   if (statuses[i].code === currentCode) {
//     message = statuses[i].response;
//   }
// }

// console.log(message);
// Request successful

const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your request is still pending' }
];

let message = '';
const currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}

console.log(message);
// Request successful

// Imagine that you are building an application to manage a user's Facebook profile. 
// A profile might have a: 
// name
// age
// dateOfBirth
// Declare three variables with these same names, making sure to use const or let depending on whether you expect the value to change over time.

const name = 'Alex';
let age = 30;
const dateOfBirth = '1995-05-15';

console.log(name);
// Alex

console.log(age);
// 30

console.log(dateOfBirth);
// 1995-05-15