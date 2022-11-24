const { Transaction } = require('../../models/transactions');

const data = require('../../data/categories.json');

const getTransactionsStats = async (req, res) => {
  const { _id: owner } = req.user;
  const { month, year } = req.params;

  const transactions = await Transaction.find({ month, year, owner });

  // написать функцию которая высчитывает сумму по категориям

  const sunByCat = category => {
    const sumCategory = transactions
      .filter(t => t.category === category)
      .map(t => t.sum)
      .reduce((acc, num) => {
        return acc + num;
      }, 0);
    return sumCategory;
  };

  // const categoryName = data.map(c => c.name);
  // console.log(categoryName);

  const test = data.map(({ name }) => ({
    [name]: sunByCat(name),
  }));
  console.log(test);

  // console.log(sunByCat('Auto'));
  // console.log(sunByCat('Education'));
  // console.log(sunByCat('Main'));
  // console.log(sunByCat(categoryName));

  // const sumCategory = transactions
  //   .filter(t => t.category === 'Auto')
  //   .map(t => t.sum)
  //   .reduce((acc, num) => {
  //     return acc + num;
  //   }, 0);

  // console.log('sumCategory', sumCategory);

  // const result = await Transaction.find({ month, year, owner });
  // res.status(201).json(result);
};

module.exports = getTransactionsStats;

// сделать 2 массива с приходами и расходами( через фильтр)
// 2, посчитать по категориям расходы
// мепнуть массив категорий. джейсон

// const expensesArray = [] // массив транзакций расходов

// const sprtedExpensesByCategory = data.map(category => {
//   return expensesArray.reduce((acc, el) => {
//   return acc + el.category === category.name ? el.sum : 0
// }, 0)})

// UNISEC контора в ЕС кот, предоставляет работу укр беженцам
