const crypto = require('crypto');

const newToken = () => {
  return crypto.randomBytes(8).toString('hex');
};

module.exports = newToken;