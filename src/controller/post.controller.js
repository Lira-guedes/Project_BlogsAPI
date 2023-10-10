const postService = require('../service/post.service');

const postPostController = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  console.log(req.user);
  const { status, data } = await postService.postPostService(title, content, categoryIds, id);

  return res.status(status).send(data);
};

module.exports = {
  postPostController,
};