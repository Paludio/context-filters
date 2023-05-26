const Joi = require('joi');

const phoneIdSchema = Joi.number().integer().positive().required();

module.exports = {
  phoneIdSchema,
};