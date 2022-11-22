const categories = require('../../data/index');

const getCategories = async (req, res) => {
  const result = await categories.listCategories();
  res.json(result);
  console.log('запрос на получение категорий');
};

module.exports = getCategories;
