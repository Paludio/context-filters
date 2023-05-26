const connection = require('../db/connection');

const getUser = async (email) => {
  const result = await connection.execute(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );

  return result;
};

module.exports = getUser;