const express = require('express');
const router = express.Router();

const { phoneController } = require('../controller');

router.get('/', phoneController.getPhones);

module.exports = router;