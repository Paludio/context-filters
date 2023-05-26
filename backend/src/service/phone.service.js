const { phoneModel } = require('../model');
const { errorType } = require('../utils/error');

const getPhones = async () => {
  try{
    const phones = await phoneModel.getAllPhones();
    return phones;
  } catch (error) {
    throw error;
  }
};

const getPhoneById = async (id) => {
  try {
    const phone = await phoneModel.getPhoneById(id);

    if (!phone) {
      throw new Error(errorType.PHONE_NOT_FOUND);
    }

    return phone;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getPhones,
  getPhoneById
};
