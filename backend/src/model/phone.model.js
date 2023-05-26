const connection = require('../db/connection');

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


module.exports = {
  getAllPhones,
  getPhoneById,
};