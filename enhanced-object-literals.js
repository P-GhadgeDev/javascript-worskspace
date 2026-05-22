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
