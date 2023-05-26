const { errorMessage, errorMap } = require("../utils/error");

const errorMiddleware = (error, _req, res, _next) => {
  
  return res.status(errorMap(error.message) || 500)
    .json({ message: errorMessage[error.message] || error.message });
};

module.exports = errorMiddleware;