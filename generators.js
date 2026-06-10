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

function* shopping(){
    // stuff on the sidewalk

    // walking down the sidewalk

    // go into the store with cash
    const stuffFromStore = yield 'cash';

    const cleanClothes = yield 'laundry';

    // walking back home
    return [stuffFromStore,cleanClothes];
}

// stuff in the store
const gen = shopping();
console.log(gen.next()); // leaving our house
// walked into the store
// walking up and down the aisles..
// purchase our stuff
console.log(gen.next('groceries')); // leaving the store with groceries
console.log(gen.next('clean clothes'));