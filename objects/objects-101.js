let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Animal Farm";

console.log(`${myBook.title} by ${myBook.author}`);

//challenge

let person = {
  name: "Niem",
  age: 32,
  location: "Vancouver"
};

console.log(
  `${person.name} is ${person.age} years old and lives in ${person.location}`
);

person.name = "Linh";

console.log(
  `${person.name} is ${person.age} years old and lives in ${person.location}`
);
