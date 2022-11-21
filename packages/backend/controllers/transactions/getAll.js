const { Transaction } = require('../../models/transactions');

const getAll = async (req, res) => {
  // const { _id: owner } = req.user;
  //  const { page = 1, limit = 10 } = req.query;
  //  const skip = (page - 1) * limit;
  //  const result = await Contact.find({ owner }, '-createdAt -updateAt', {
  //    skip,
  //    limit,
  //  }).populate('owner', 'email subscription');
  const result = await Transaction.find();
  res.status(200).json(result);
  console.log('запрос на transactions');
};

module.exports = getAll;
