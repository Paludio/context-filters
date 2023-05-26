const express = require('express');
const router = express.Router();

const { phoneController } = require('../controller');
const { validateId } = require('../middleware/phone.middleware');

router.get('/', phoneController.getPhones);
router.get('/:id', validateId, phoneController.getPhoneById);

module.exports = router;