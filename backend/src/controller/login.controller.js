const { loginService } = require("../service");

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const { message } = await loginService.login({ email, password });

    return res.status(200).json({ token: message })
  }
  catch (error) {
    next(error);
  }
  
};

module.exports = {
  login,
};