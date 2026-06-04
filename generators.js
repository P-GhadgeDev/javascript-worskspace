/* Generators */

const colors = ['red','green','blue'];

for (let color of colors){
    console.log(color);
    // red
    // green
    // blue
}

const numbers = [1,2,3,4];

let total = 0;

for (let number of numbers){
    console.log(total += number);
    // 1
    // 3
    // 6
    // 10
}

// function* numbers(){
  
// }


// function *numbers(){
  
// }

function* numbers(){
  yield;
}

const gen = numbers();

console.log(numbers());

console.log(gen.next());

console.log(gen.next());