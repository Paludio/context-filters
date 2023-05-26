const { phoneService } = require('../service');

const getPhones = async (_req, res, next) => {
  try {
    const phones = await phoneService.getPhones();

    return res.status(200).json({ phones });

  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPhones,
};
