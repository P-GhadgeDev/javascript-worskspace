/* Default Function Arguments */

function makeAjaxRequest(url, method = "GET") {
  // Logic to make the request
  return method;
}

console.log(makeAjaxRequest("google.com"));
// GET

console.log(makeAjaxRequest("google.com", null));
// null

// Default values are only used when the argument is undefined.

console.log(makeAjaxRequest("google.com", "POST"));
// POST

/* Creating an Admin User with a Default Argument */

function User(id) {
  this.id = id;
}

function generateId() {
  return Math.floor(Math.random() * 9999999);
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

const user = new User(generateId());

console.log(createAdminUser(user));
// User { id: 1234567, admin: true }

console.log(createAdminUser());
// User { id: 7654321, admin: true }

/* Using Default Arguments */

function sum(a = 0, b = 0) {
  return a + b;
}

console.log(sum());
// 0

console.log(sum(5));
// 5

console.log(sum(5, 10));
// 15

/* Refactoring with Default Arguments */

function addOffset(style = {}) {
  style.offset = "10px";
  return style;
}

console.log(addOffset());
// { offset: '10px' }

console.log(addOffset({ color: "red" }));
// { color: 'red', offset: '10px' }
