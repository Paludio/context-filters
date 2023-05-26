const express = require('express');
const router = express.Router();

const { loginController } = require('../controller');
const loginMiddleware = require('../middleware/login.middleware');

router.post('/', loginMiddleware, loginController.login);

module.exports = router;