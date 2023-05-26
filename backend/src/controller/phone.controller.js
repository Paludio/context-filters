const { phoneService }  = require('../service');

const updatePhone = async (req, res, next) => {
  try {
    const { id } = req.params;

    await phoneService.updatePhone(req.body, id);

    return res.status(201).json({ phone: { id, ...req.body } });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updatePhone,
};