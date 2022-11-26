const { Schema, model } = require('mongoose');
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
    balance: {
      type: Number,
      default: 0,
    },
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

const addSchema = Joi.object({
  date: Joi.date(),
  isIncome: Joi.boolean(),
  category: Joi.string(),
  comment: Joi.string(),
  sum: Joi.number().required(),
  balance: Joi.number(),
});

const schemas = {
  addSchema,
};

const Transaction = model('Transaction', transactionsSchema);

module.exports = {
  Transaction,
  schemas,
};
