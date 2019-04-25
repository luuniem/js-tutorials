const account = {
  name: "Niem Nguyen",
  expenses: [],
  myIncome: [],
  addExpense: function(description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    });
  },
  getAccountSummary: function() {
    let balance = 0;
    let totalExpenses = 0;
    let totalIncome = 0;
    this.expenses.forEach(function(expense) {
      totalExpenses = totalExpenses + expense.amount;
    });
    this.myIncome.forEach(function(income) {
      totalIncome = totalIncome + income.amount;
    });
    balance = totalIncome - totalExpenses;

    return `${
      this.name
    } has a balance of $${balance}, income of $${totalIncome}, and accrued $${totalExpenses} of expenses`;
  },
  addIncome: function(description, amount) {
    this.myIncome.push({
      description: description,
      amount: amount
    });
  }
};

//Expense -> description, amount,
//addExpense -> description, amount
//getAccountSumamry -> total up all expenses -> Niem has $100 in expenses.

// const addExpense = function(description, amount) {
//   return account.expenses.push({ description, amount });
// };
account.addIncome("job", 10000);
account.addIncome("job", 18000);

account.addExpense("Rent", 900);
account.addExpense("coffee", 2);
console.log(account);
console.log(account.getAccountSummary());
