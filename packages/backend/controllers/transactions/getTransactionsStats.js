// const { Transaction } = require('../../models/transactions');

// const getTransactionsStats = async (req, res) => {
//   const { _id: owner } = req.user;

//   console.log(req.body);

//   const { day, month, year } = req.body;

//   const result = await Transaction.find({ day, month, year, owner });
//   res.status(201).json(result);
//   console.log('добавление транзакции');
// };

// module.exports = getTransactionsStats;

// создать перед резалтом 3 переменных день год месяц и вызвать через реквест бади дейт, получаю 3 поля из объекта дата и все 3 закинуть на 6 строку в креейт

// создать новый контроллер фильтр транз вызвать у транзакшнс файнд мени (объект месяц и год, взьть из из реквест парамс)
