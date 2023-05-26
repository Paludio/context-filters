const { phoneModel } = require('../model');

const getPhones = async () => {
  try{
    const phones = await phoneModel.getAllPhones();
    return phones;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getPhones,
};
