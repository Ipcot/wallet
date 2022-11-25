const { Transaction } = require('../../models/transactions');
const { User } = require('../../schemas/user');

const addTransaction = async (req, res) => {
  const { _id: owner } = req.user;
  const { isIncome, sum, date } = req.body;

  console.log(isIncome);

  User.findById(owner, function (err, user) {
    if (err) return;
    user.balance = isIncome ? user.balance + sum : user.balance - sum;

    console.log(user.balance);

    user.save();
  });

  const createdDate = new Date(date);
  const month = createdDate.getMonth() + 1;
  const year = createdDate.getFullYear();

  const result = await Transaction.create({ ...req.body, owner, month, year });
  res.status(201).json(result);
};

module.exports = addTransaction;
