const express = require('express');
const router = express.Router();

const { phoneController } = require('../controller');
const { verifyId, verifyPhone } = require('../middleware/phone.middleware');
const { verifyToken } = require('../middleware/token.middleware');

router.get('/', verifyToken, phoneController.getPhones);
router.get('/:id', verifyToken, verifyId, phoneController.getPhoneById);
router.put('/edit/:id', verifyToken, verifyId,verifyPhone, phoneController.updatePhone);

module.exports = router;