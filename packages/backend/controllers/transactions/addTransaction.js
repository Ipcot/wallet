const { Transaction } = require('../../models/transactions');

// const RequestError = require('../../helpers/RequestError');

// const { schemas } = require('../../models/transactions');

const addTransaction = async (req, res) => {
  //    const { _id: owner } = req.user;

  // const { error } = schemas.addSchema.validate(req.body);
  // if (error) {
  //   throw RequestError(400, error.message);
  // }
  // const result = await Contact.create({ ...req.body, owner });
  const result = await Transaction.create({ ...req.body });
  res.status(201).json(result);
  console.log('добавление транзакции');
};

module.exports = addTransaction;

// создать перед резалтом 3 переменных день год месяц и вызвать через реквест бади дейт, получаю 3 поля из объекта дата и все 3 закинуть в на 15 строку в креейт

// создать новый контроллер фильтр транз вызвать у транзакшнс файнд мени (объект месяц и год, взьть из из реквест парамс)
