let min = 1;
let max = 5;
let guess = number => {
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return number === randomNum
    ? `correct, your matching number is ${number}`
    : `${number} is not correct the correct answer`;
};

let myNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(guess(myNumber));
//guessing game
