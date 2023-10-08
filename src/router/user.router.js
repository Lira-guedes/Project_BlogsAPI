const express = require('express');

const { userController } = require('../controller/user.controller');
const { userValidation } = require('../middlewares/user.validation');

const router = express.Router();

router.post('/', userValidation, userController);

module.exports = router;