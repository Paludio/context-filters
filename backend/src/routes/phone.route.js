const express = require('express');
const { phoneController } = require('../controller');
const { verifyToken } = require('../middleware/token.middleware');
const { verifyId, verifyPhone } = require('../middleware/phone.middleware');

const router = express.Router();

router.put('/edit/:id', verifyToken, verifyId, verifyPhone, phoneController.updatePhone);

module.exports = router;