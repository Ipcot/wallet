const { Transaction } = require('../../models/transactions');

const getAll = async (req, res) => {
  const { _id: owner } = req.user;

  // пагинация
  // const { page = 1, limit = 10 } = req.query;
  // const skip = (page - 1) * limit;
  // const result = await Transaction.find({ owner }, '-createdAt -updatedAt', {
  //   skip,
  //   limit,
  // }).populate('owner', 'name email');
  // ================================
  const result = await Transaction.find({ owner }, '-createdAt -updatedAt');
  res.status(200).json(result);
  console.log('запрос на transactions');
};

module.exports = getAll;
