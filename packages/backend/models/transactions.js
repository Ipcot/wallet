const { Schema, model, now } = require('mongoose');
const Joi = require('joi');

const handleSaveErrors = require('../helpers/handleSaveErrors');
const data = require('../data/categories.json');

const types = data.map(item => item.name);

const transactionsSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
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
    // эти 2 поля не отображаются на фронтенде в таблице, они нужны для подсчета статистики по месяцу и году
    month: {
      type: Number,
      default: new Date().getMonth() + 1,
    },
    year: {
      type: Number,
      default: new Date().getFullYear(),
    },
  },
  { versionKey: false, timestamps: true }
);

transactionsSchema.post('save', handleSaveErrors);
// это приходит с фронта
const addSchema = Joi.object({
  date: Joi.date(),
  isIncome: Joi.boolean(),
  category: Joi.string().required(),
  comment: Joi.string(),
  sum: Joi.number().required(),
});

const schemas = {
  addSchema,
};

const Transaction = model('Transaction', transactionsSchema);

module.exports = {
  Transaction,
  schemas,
};
