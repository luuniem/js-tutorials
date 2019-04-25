// function profitableGamble(prob, prize, pay) {
//   return prob * prize > pay ? true : false;
// }

// console.log(profitableGamble(0.3, 4, 5));
// console.log(profitableGamble(0.9, 9, 9));
// console.log(profitableGamble(0.8, 9, 5));

lessThanZero = number => {
  return number <= 0 ? true : false;
};
console.log(lessThanZero(-1));
console.log(lessThanZero(0));
console.log(lessThanZero(10));
