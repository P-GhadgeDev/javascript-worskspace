/* Classes */

// function Car(options){
//   this.title = options.title;
// }

// Car.prototype.drive = function(){
//    return 'vroom'; 
// }

// const car = new Car({
//     title:'Focus'
// });

// console.log(car.drive());
// // vroom

// console.log(car);
// // Car {title:'Focus'}

function Car(options){
  this.title = options.title;
}

Car.prototype.drive = function(){
   return 'vroom'; 
}

function Toyota(options){
  Car.call(this,options);
  this.color = options.color;
}

const toyota = new Toyota({color:'red',title:'Daily Driver'});

console.log(toyota);

console.log(car.drive());
// vroom

console.log(car);
// Car {title:'Focus'}

function Toyota(options){
  Car.call(this,options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;
Toyota.prototype.honk = function(){
  return 'beep';
}

const toyota = new Toyota({color:'red',title:'Daily Driver'});

console.log(toyota);

console.log(car.drive());
// vroom

console.log(car);
// Car {title:'Focus'}

console.log(toyota.drive());

console.log(toyota.honk());