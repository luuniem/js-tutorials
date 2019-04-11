let add = function(a, b) {
  return a + b;
};
let result = add(10, 2);

console.log(result);

//default arguments

let getScoreText = function(name = "no name", score = 0) {
  return " Name: " + name + " Score: " + score;
};

let scoreText = getScoreText(99);
console.log(scoreText);

//challenge area

//total, tip 15%,

let tipCalculator = function(total) {
  return "You should tip: $" + total * 0.15 + ".";
};

let tip = tipCalculator(200);
console.log(tip);
