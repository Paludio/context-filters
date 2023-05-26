const connection = require('../db/connection');

const getUser = async (userEmail) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM users WHERE email = ?',
    [userEmail]
  );

  return result;
};

module.exports = {
  getUser,
};