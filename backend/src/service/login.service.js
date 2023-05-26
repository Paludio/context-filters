const { userModel } = require('../model');
const { errorType } = require('../utils/error');
const newToken = require('../utils/token');

const login = async ({email, password}) => {
  try {
    const user = await userModel.getUser(email);

    if (!user || user.password !== password) {
      throw new Error(errorType.ACCESS_DENIED);
    }

    const token = newToken();

    return { message: token };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  login,
};