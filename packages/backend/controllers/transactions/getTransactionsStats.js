const { Transaction } = require('../../models/transactions');

const data = require('../../data/categories.json');

const getTransactionsStats = async (req, res) => {
  const { _id: owner } = req.user;
  const { month, year } = req.params;

  const transactions = await Transaction.find({ month, year, owner });

  const expenseTransactions = transactions.filter(t => t.isIncome === false);

  const expensesArray = expenseTransactions;

  const sortedExpensesByCategory = data.map(category => {
    const sumByCategory = expensesArray.reduce((acc, el) => {
      return acc + (el.category === category.name ? el.sum : 0);
    }, 0);
    return {
      [category.name]: sumByCategory,
    };
  });

  const incomExpenseSum = isIncome => {
    return transactions
      .filter(t => t.isIncome === isIncome)
      .map(t => t.sum)
      .reduce((acc, num) => {
        return acc + num;
      }, 0);
  };

  const result = {
    sortedExpensesByCategory,
    Income: incomExpenseSum(true),
    Expense: incomExpenseSum(false),
  };

  res.status(201).json(result);
};

module.exports = getTransactionsStats;
