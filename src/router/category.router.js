const express = require('express');

const categoryController = require('../controller/category.controller');
const { tokenValidation } = require('../middlewares/token.validation');
const { categoryValidation } = require('../middlewares/category.validation');

const router = express.Router();

router.post('/', tokenValidation, categoryValidation, categoryController.postCategoryController);
router.get('/', tokenValidation, categoryController.getCategoryController);

module.exports = router;