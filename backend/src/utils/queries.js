const snakeize = require('snakeize');

const createColumnsUpdate = (obj) => {
  const test = Object.keys(snakeize(obj))
    .map((key) => `${key} = ?`)
    .join(', ');
  
  return test;
};

const createPlaceholder = (obj) => Object.keys(obj).map((_key) => '?').join(', ');

module.exports = {
  createColumnsUpdate,
  createPlaceholder,
};