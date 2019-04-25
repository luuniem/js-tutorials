const account = {
  name: "Niem Nguyen",
  income: [],
  balance: 0,
  expenses: [],
  totalExpenses: 0,
  addIncome: function(description, amount) {
    this.balance = this.balance + amount;
    this.income.push({
      description: description,
      amount: amount
    });
  },
  addExpenses: function(description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    });
    this.totalExpenses = this.totalExpenses + amount;
  },
  getSummary: function() {
    let outstanding = this.balance - this.totalExpenses;

    return `Your balance is $${this.balance}
              Your total expenses is $${this.totalExpenses}
              Your outstanding balance is $${outstanding.toFixed(2)}`;
  }
};
account.addIncome("direct deposit", 1200);
account.addExpenses("Starbucks", 3.85);
account.addExpenses("IKEA", 1300);
console.log(account);
console.log(account.getSummary());
console.log(Math.PI);
