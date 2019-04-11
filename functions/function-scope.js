let name = "Niem";

console.log(`my name is ${name}`);

let getScoreText = function(name = "no name", score = 0) {
  return `Name: ${name} Score: ${score}`;
};

let scoreText = getScoreText(99);
console.log(scoreText);

let tipCalculator = function(total, tipPercent = 0.25) {
  return `A 25% tip on ${total} should be ${total * tipPercent} `;
};

let tip = tipCalculator(200);
console.log(tip);
