let myAccount = {
  name: "Niem",
  expenses: 0,
  income: 0
};

let addExpenses = function(myAccount, spent) {
  myAccount.expenses = myAccount.expenses + spent;
};

let addIncome = (myAccount, income) => {
  myAccount.income = myAccount.income + income;
};

let getAccountSummary = myAccount => {
  let balance = myAccount.income - myAccount.expenses;
  return `Niem has a balance of $${balance} with an income of $${
    myAccount.income
  } and expenses of $${myAccount.expenses}`;
};

let resetAccount = myAccount => {
  myAccount.expenses = 0;
  myAccount.income = 0;
};

addIncome(myAccount, 2000);
addExpenses(myAccount, 3.85);
addExpenses(myAccount, 50);

console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
