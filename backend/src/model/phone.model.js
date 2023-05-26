const connection = require('../db/connection');
const { createColumnsUpdate } = require('../utils/queries');

const getAllPhones = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM phones',
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

const editPhone = async (phone, id) => {
  const columns = createColumnsUpdate(phone);

  const [{ affectedRows }] = await connection.execute(
    `UPDATE phones
    SET ${columns}
    WHERE id = ?
    `,
    [...Object.values(phone), id],
  );
  console.log(affectedRows);

  return affectedRows;
};


module.exports = {
  getAllPhones,
  getPhoneById,
  editPhone,
};