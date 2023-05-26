const { phoneModel } = require('../model');
const { errorType } = require('../utils/errors');

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

const updatePhone = async (phone, id) => {
  try {
    await getPhoneById(id);
    await phoneModel.editPhone(phone, id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  updatePhone,
  getPhoneById
}