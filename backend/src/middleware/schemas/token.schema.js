const Joi = require('joi');

const tokenSchema = Joi.string().length(16).required();

module.exports = {
  tokenSchema
};