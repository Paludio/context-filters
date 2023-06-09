const loginSchema = require("./schemas/login.schema");

const loginMiddleware = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = loginMiddleware;