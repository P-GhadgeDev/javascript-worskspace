/* Default Function Arguments */

function makeAjaxRequest(url, method = "GET") {
  return method;
  // logic to make the request
}

console.log(makeAjaxRequest("google.com"));
// GET

console.log(makeAjaxRequest("google.com", null));
//

console.log(makeAjaxRequest("google.com", "POST"));
// POST

// function User(id) {
//   this.id = id;
// }

// function generateId() {
//   return Math.random() * 9999999;
// }

// function createAdminUser(user) {
//   user.admin = true;
//   return user;
// }

// createAdminUser(new User(generateId()));

function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 9999999;
}

function createAdminUser(user=new UserId(generateId())) {
  user.admin = true;
  return user;
}

const user = new User(generateId());
createAdminUser(user);