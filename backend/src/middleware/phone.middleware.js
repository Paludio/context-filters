const { phoneIdSchema, phoneSchema } = require("./schemas/phone.schema");

const verifyId = (req, res, next) => {
  const { id } = req.params;
  const { error } = phoneIdSchema.validate(Number(id));

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

const verifyPhone = (req, res, next) => {
  const { error } = phoneSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = {
  verifyId,
  verifyPhone
};