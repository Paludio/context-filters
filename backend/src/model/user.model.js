const connect = require('../db/connection');
const { errorType } = require('../utils/error');

const getUser = async (userEmail) => {
  const [result] = await connect.execute(
    'SELECT * FROM users WHERE email = ?',
    [userEmail]
  );

  return result;
};

module.exports = {
  getUser,
};