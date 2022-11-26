const { Transaction } = require('../../models/transactions');
const { User } = require('../../schemas/user');

const addTransaction = async (req, res) => {
  const { _id: owner } = req.user;
  const { isIncome, sum, date } = req.body;

  User.findById(owner, async function (err, user) {
    if (err) return;
    user.balance = isIncome ? user.balance + sum : user.balance - sum;

    const createdDate = new Date(date);
    const month = createdDate.getMonth() + 1;
    const year = createdDate.getFullYear();

    const transactionBalance = user.balance;

    const result = await Transaction.create({
      ...req.body,
      owner,
      month,
      year,
      balance: transactionBalance,
    });
    res.status(201).json(result);

    user.save();
  });
};

module.exports = addTransaction;
