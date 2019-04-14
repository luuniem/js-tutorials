let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
};

let otherBook = {
  title: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723
};

let getSummary = function(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  };
};

let bookSummary = getSummary(myBook);
let bookOtherSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);
console.log(bookOtherSummary.pageCountSummary);

//create function take f in and return object with all f,c,k

let tempConversion = function(f) {
  return {
    celsius: ((f - 32) * 5) / 9,
    kelvin: ((f + 459.67) * 5) / 9
  };
};

let temp = tempConversion(89);

console.log(temp.celsius);
