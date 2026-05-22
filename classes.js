/* Classes */

function Car(options){
  this.title = options.title;
}

Car.prototype.drive = function(){
   return 'vroom'; 
}

const car = new Car({
    title:'Focus'
});

console.log(car.drive());
// vroom

console.log(car);
// Car {title:'Focus'}