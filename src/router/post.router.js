const express = require('express');

const postController = require('../controller/post.controller');
const { tokenValidation } = require('../middlewares/token.validation');

const router = express.Router();

router.post('/', tokenValidation, postController.postPostController);

module.exports = router;