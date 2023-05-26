const express = require('express');
const router = express.Router();

const { phoneController } = require('../controller');
const { verifyId } = require('../middleware/phone.middleware');
const { verifyToken } = require('../middleware/token.middleware');

router.get('/', verifyToken, phoneController.getPhones);
router.get('/:id', verifyToken, verifyId, phoneController.getPhoneById);

module.exports = router;