const crypto = require('crypto');

const newToken = () => {
  return crypto.randomBytes(2).toString('hex');
};

module.exports = newToken;