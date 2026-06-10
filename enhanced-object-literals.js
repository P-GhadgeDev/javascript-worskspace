/* Enhanced Object Literals */

function createBookShop(inventory) {
  return {
    inventory: inventory,

    // ES6 Method Syntax
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },

    // ES6 Method Syntax
    priceForTitle(title) {
      return this.inventory.find((book) => book.title === title).price;
    },
  };
}

const inventory = [
  {
    title: "Harry Potter",
    price: 10,
  },
  {
    title: "Eloquent JavaScript",
    price: 15,
  },
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
// 25

console.log(bookShop.priceForTitle("Harry Potter"));
// 10

/* Traditional Object literal */

function saveFile(url, data) {
  const request = {
    url,
    data,
    method: "POST",
  };

  console.log(request);
}

const url = "http://fileupload.com";
const data = { color: "red" };

saveFile(url, data);

// {
//   url: "http://fileupload.com",
//   data: {
//     color: "red"
//   },
//   method: "POST"
// }

/* Refactor the following code to use enhanched object literal syntax */

const fields = ["firstName", "lastName", "phoneNumber"];

// const props = { fields: fields };

const props = { fields };

console.log(props);
// { fields: [ 'firstName', 'lastName', 'phoneNumber' ] }

const canvasDimensions = function (width, initialHeight) {
  const height = (initialHeight * 9) / 16;
  // return {
  //   width: width,
  //   height: height,
  // };

  return {
    width,
    height,
  };
};

console.log(canvasDimensions(200, 160));
// { width: 200, height: 90 }

const color = "red";

const Car = {
  // color: color,
  color,

  // drive: function() {
  drive() {
    return "Vroom!";
  },

  // getColor: function() {
  getColor() {
    return this.color;
  },
};

console.log(Car.drive());
// Vroom!

console.log(Car.getColor());
// red
