const snakeize = require('snakeize');

const createColumns = (obj) => {
  const result = Object.keys(snakeize(obj))
    .map((key) => `${key} = ?`)
    .join(', ');

  return result;
};

module.exports = {
  createColumns,
}