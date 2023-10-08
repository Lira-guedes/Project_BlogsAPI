const express = require('express');

const userController = require('../controller/user.controller');
const { userValidation } = require('../middlewares/user.validation');
const { tokenValidation } = require('../middlewares/token.validation');

const router = express.Router();

router.post('/', userValidation, userController.userController);
router.get('/', tokenValidation, userController.findAllUsers);
router.get('/:id', tokenValidation, userController.findByIdUsers);

module.exports = router;