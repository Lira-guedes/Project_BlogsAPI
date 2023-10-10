const express = require('express');

const postController = require('../controller/post.controller');
const { tokenValidation } = require('../middlewares/token.validation');
const { postValidation } = require('../middlewares/post.validation');

const router = express.Router();

router.post(
  '/',
  tokenValidation,
  postValidation,
  postController.postPostController,
);

module.exports = router;