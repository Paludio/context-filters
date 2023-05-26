const express = require('express');
const { loginController } = require('../controller');
const verifyLogin = require('../middleware/login.middleware');

const router = express.Router();

router.post('/', verifyLogin, loginController.login);

module.exports = router;