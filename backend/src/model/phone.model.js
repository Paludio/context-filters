const connection = require('../db/connection');

const getAllPhones = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM phones',
  );
 
  return result;
};


module.exports = {
  getAllPhones,
};