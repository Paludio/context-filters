const connection = require('../db/connection');
const { createColumns } = require('../utils/queries');

const editPhone = async (phone, id) => {
  const columns = createColumns(phone);
  console.log([...Object.values(phone)]);
  const result = await connection.execute(
    `UPDATE phones
    SET ${columns}
    WHERE id = ?`,
    [...Object.values(phone), id]
  );

  return result;
};

const getPhoneById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM phones WHERE id = ?',
    [id],
  );

  return result;
}; 

module.exports = {
  editPhone,
  getPhoneById
}