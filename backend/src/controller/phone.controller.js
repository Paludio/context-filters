const { phoneService } = require('../service');

const getPhones = async (_req, res, next) => {
  try {
    const phones = await phoneService.getPhones();

    return res.status(200).json({ phones });

  } catch (error) {
    next(error);
  }
};

const getPhoneById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const phone = await phoneService.getPhoneById(Number(id));

    return res.status(200).json({ phone });

  } catch (error) {
    next(error);
  }
};

const updatePhone = async (req, res, next) => {
  const { id } = req.params;
  
  try {
    await phoneService.updatePhone(req.body, Number(id));

    return res.status(201).json({ phone: { id, ...req.body } });
   
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPhones,
  getPhoneById,
  updatePhone,
};
