const { Schema, model } = require('mongoose');
const Joi = require('joi');

const handleSaveErrors = require('../helpers/handleSaveErrors');
const data = require('../data/categories.json');
// const categories = require('./categories.json');

const types = data.map(item => item.name);

const transactionsSchema = new Schema(
  {
    // date: {
    //   type: Date,
    //   required: true,
    // },
    // dagi: {
    //   type: Date,
    //   required: true,
    // },// date: {
    //   type: Date,
    //   required: true,
    // },// date: {
    //   type: Date,
    //   required: true,
    // },
    // вмесно дейт добавить 3 поля день год и месяц, все тип число, обязательные

    isIncome: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      enum: types,
      required: true,
    },
    comment: {
      type: String,
    },
    sum: {
      type: Number,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

transactionsSchema.post('save', handleSaveErrors);
// это приходит с фронта
const addSchema = Joi.object({
  date: Joi.date().required(),
  isIncome: Joi.boolean(),
  category: Joi.string().required(),
  comment: Joi.string(),
  sum: Joi.number().required(),
});

// const updateFavoriteSchema = Joi.object({
//   favorite: Joi.boolean().required(),
// });

const schemas = {
  addSchema,
  // updateFavoriteSchema,
};

const Transaction = model('Transaction', transactionsSchema);

module.exports = {
  Transaction,
  schemas,
  // addSchema,
};
