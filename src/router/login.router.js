const express = require('express');

const loginController = require('../controller/login.controller');
const { loginValidation } = require('../middlewares/login.validation');

const router = express.Router();

router.post('/', loginValidation, loginController.postLogin);

module.exports = router;