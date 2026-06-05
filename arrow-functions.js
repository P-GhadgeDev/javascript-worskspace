/* Normal Function */
// const add = function(a,b){
//    return a + b;
// }

// console.log(add(1,2));
// 3

/* Fat Arrow Function */
// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(1, 2));
// 3

const add = (a, b) => a + b;
console.log(add(1, 2));
// 3

const newSum = add(1, 2);
console.log(newSum);
// 3

// const double = function(number){
//     return 2 * number;
// };

// console.log(double(8));

// const double = (number) => {
//   return 2 * number;
// };

// console.log(double(8));

// const double = (number) => 2 * number;

// console.log(double(8));

// const double = (number) => 2 * number;

// console.log(double(8));

// const double = (number1, number2) => {
//   return 2 * number1 + 2 * number2;
// };

// console.log(double(8, 4));

// const double = () => {
//   return 2;
// };

// console.log(double());

const double = (number) => 2 * number;

console.log(double(8));

// const numbers = [1, 2, 3];

// numbers.map(function (number) {
//   return 2 * number;
// });

const numbers = [1, 2, 3];

numbers.map((number) => 2 * number);

const team = {
    members:['Jane','Bill'],
    teamName:'Super Squad',
    teamSummary:function(){
        return this.members.map(function(member){
            return `${member} is on team ${this.teamName}`;
        }.bind(this));
    }
}

team.teamSummary();