let getCircumference = radius => {
  return `The circuference of your circle is ${radius * 2 * 3.14}.`;
};

let getArea = radius => {
  return `The area of your circle is ${3.14 * (radius * radius)}.`;
};

console.log(getCircumference(25));
console.log(getArea(25));
