const todos = [
  "Learn JS",
  "Learn React",
  "Watch Game of Thrones",
  "Get Better Job",
  "Go on Vacation"
];

// console.log(
//   `You have ${todos.length} things you need to do. They are ${todos[0]}, ${
//     todos[3]
//   }, and ${todos[todos.length - 1]}.`
// );

// todos.splice(3, 1, "This is the new 2nd item");

// console.log(todos.length);
// console.log(todos);

// todos.forEach(function(item, index) {
//   console.log(index);
//   console.log(item);
// });

todos.map((item, index) => {
  const num = index + 1;
  console.log(`${num}. ${item}`);
});
