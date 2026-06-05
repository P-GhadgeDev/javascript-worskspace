/* Iterating Through an Array */
var colors = ["red", "blue", "green"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
// red
// green
// blue

colors.forEach(function (index, color) {
  console.log(index, color);
});
// 0 red
// 1 green
// 2 blue

/* Summing Numbers with forEach */
var numbers = [1, 2, 3, 4, 5];

var sum = 0;

function adder(number) {
  sum += number;
}

numbers.forEach(adder);

console.log(sum);
// 15

/* Moving Away from For Loops */

// The code below calls 'savePost' for each post in the 'posts' array.
// While a traditional for loop works, it requires manually managing an index, which can make the code less readable.
// The forEach helper allows us to express our intent more clearly:
// "for each post, call savePost."
// Refactor the code below to use forEach instead of a for loop.

function savePost(post) {
    console.log(`Saving post ${post.id}: ${post.title}`);
}

function handlePosts() {
  var posts = [
    { id: 23, title: "Daily JS News" },
    { id: 52, title: "Code Refactor City" },
    { id: 105, title: "The Brightest Ruby" },
  ];

  // Using forEach Instead of a For Loop
  // A for loop iterates through the array using an index:
  
  // for (var i = 0; i < posts.length; i++) {
  //   savePost(posts[i]);
  // }
  
  // Using forEach makes the code more expressive and easier to read:
  posts.forEach(function (post) {
    savePost(post);
  });
  // The purpose becomes immediately clear:
  // For each post in the array, execute savePost(post).
}

handlePosts();

/* Processing Values */

// The 'images' array contains objects that represent images.
// Each image has a height and a width property.
// Using the forEach helper, calculate the area of each image
// (height × width) and store the result in a new array called 'areas'.

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 },
];

var areas = [];

images.forEach(function (image) {
  areas.push(image.height * image.width);
});

console.log(areas);
// [300, 1800, 1728]

/* Gmail Spam Folder Analogy */

var emails = [
  "Lose Weight Fast!",
  "I send you money",
  "Fantastic scam, just click here",
  "Your computer has a virus, fix it now",
];

function deleteEmail(email) {
  return email;
}

for (let i = 0; i < emails.length; i++) {
  console.log(deleteEmail(emails[i]));
}
// Lose Weight Fast!
// I send you money
// Fantastic scam, just click here
// Your computer has a virus, fix it now

emails.forEach(function (email) {
  console.log(deleteEmail(email));
});
// Lose Weight Fast!
// I send you money
// Fantastic scam, just click here
// Your computer has a virus, fix it now
