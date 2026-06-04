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
