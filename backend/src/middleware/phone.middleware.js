const { phoneIdSchema } = require("./schemas/phone.schema");

const validateId = (req, res, next) => {
  const { id } = req.params;
  const { error } = phoneIdSchema.validate(Number(id));

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = {
  validateId,
};