const bcrypt = require('bcryptjs');

const newToken = () => {
  return bcrypt.hashSync(8).substring();
};

module.exports = newToken;