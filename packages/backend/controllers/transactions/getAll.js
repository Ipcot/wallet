const { Transaction } = require('../../models/transactions');
// const { User } = require('../../schemas/user');

const getAll = async (req, res) => {
  const { _id: owner } = req.user;

  // пагинация
  const { page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Transaction.find({ owner }, '-createdAt -updatedAt', {
    skip,
    limit,
    sort: { _id: -1 },
  }).populate('owner', 'name email balance');

  // const user = await User.findById(owner);

  // let curBalance = user.balance;

  // const transactions = result.map(t => {
  //   const balance = curBalance;
  //   t.balance = balance;
  //   curBalance = t.isIncome ? curBalance - t.sum : curBalance + t.sum;
  //   return t;
  // });

  res.status(200).json(result);
  // res.status(200).json(transactions);
};

module.exports = getAll;
