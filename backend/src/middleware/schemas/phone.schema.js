const Joi = require('joi');

const phoneIdSchema = Joi.number().integer().positive().required();

const phoneSchema = Joi.object({
  name: Joi.string().min(3).required(),
  brand: Joi.string().min(3).required(),
  price: Joi.string().min(3).required(),
  color: Joi.string().min(3).required(),
  storage: Joi.string().min(3).required(),
  camera: Joi.string().min(3).required(),
  screen: Joi.string().min(3).required(),
  operatingSystem: Joi.string().min(3).required(),
});

module.exports = {
  phoneIdSchema,
  phoneSchema,
};