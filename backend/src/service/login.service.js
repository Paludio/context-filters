const { userModel } = require('../model');
const { errorType } = require('../utils/error');

const login = async ({email, password}) => {
  const user = await userModel.getUser(email);

  if (!user || user.password !== password) {
    return {
      type: errorType.ACCESS_DENIED,
      message: 'Incorrect username or password',
    }
  }
};