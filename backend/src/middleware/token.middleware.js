const { tokenSchema } = require("./schemas/token.schema");

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;

  const { error } = tokenSchema.validate(authorization);

  if (error) {
    return res.status(400).json({ message: 'Token id required' });
  }

  next();
};

module.exports = {
  verifyToken,
};