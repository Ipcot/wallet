const Joi = require('joi');
const { Schema, model } = require('mongoose');
const handleSaveErrors = require('../helpers/handleSaveErrors');

const emailReg =
  /^((([0-9A-Za-z]{1}[-0-9A-z.]{0,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}.){1,1}[-A-Za-z]{2,})$/u;
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],

    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      match: emailReg,
      unique: true,
      required: [true, 'Email is required'],
      unique: true,
    },
    balance: {
      type: Number,
      default: 0,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', handleSaveErrors);

const registSchemaJoi = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailReg).required(),
  password: Joi.string().min(6).required(),
});

const loginSchemaJoi = Joi.object({
  email: Joi.string().pattern(emailReg).required(),
  password: Joi.string().min(6).required(),
});

const User = model('user', userSchema);

module.exports = { User, registSchemaJoi, loginSchemaJoi };
