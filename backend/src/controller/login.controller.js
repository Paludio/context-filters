const { loginService } = require("../service");
const { errorMap, errorType } = require('../utils/error');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const { message } = await loginService.login({ email, password });

    return res.status(200).json({ token: message })
  }
  catch (error) {
    if (error.message === errorType.ACCESS_DENIED) {
      return res.status(errorMap(errorType.ACCESS_DENIED)).json({ message: 'Acesso negado' });
    }
    error.message = 'Erro interno';
    next(error);
  }
  
};

module.exports = {
  login,
};