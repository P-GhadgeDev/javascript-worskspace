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
