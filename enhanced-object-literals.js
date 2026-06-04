/* Enhanced Object Literals */

function createBookShop(inventory) {
  return {
    inventory: inventory,
    // inventoryValue: function () {
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    // priceForTitle: function (title) {
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
  { title: "Eloquent JavaScript", price: 15 },
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
// 25

console.log(bookShop.priceForTitle("Harry Potter"));
// 10

// function saveFile(url, data) {
//   $.ajax({
//     method: "POST",
//     url: url,
//     data: data,
//   });
// }

// const url = "http://fileupload.com";
// const data = { color: "red" };

// saveFile(url, data);

function saveFile(url, data) {
  $.ajax({
    url,
    data,
    method: "POST",
  });
}

const url = "http://fileupload.com";
const data = { color: "red" };

saveFile(url, data);
