const postService = require('../service/post.service');

const postPostController = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await postService.postPostService(name);

  return res.status(status).send(data);
};

module.exports = {
  postPostController,
};