/* Promises and Fetch */

promise = new Promise((resolve, reject) => {
  //    resolve();
  //    reject();
});

promise
  .then(() => {
    console.log("finally finished!");
  })
  .then(() => {
    console.log("I was also Ran!");
  })
  .catch(() => {
    console.log("Uh Oh!");
  });
