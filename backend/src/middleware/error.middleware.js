const errorMiddleware = (error, _req, res, _next) => {
  return res.status(500).json({ message: error.message });
};

module.exports = errorMiddleware;