let calculateSupply = (age, amountPerDay) => {
  let consumeAmount = (age * amountPerDay) | 4;
  return `You'll need ${consumeAmount} to last you until you are at age of ${age} `;
};

console.log(calculateSupply(50, 12.6));
