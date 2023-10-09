const categoryService = require('../service/category.service');

const postCategoryController = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await categoryService.postCategoryService(name);

  return res.status(status).send(data);
};

const getCategoryController = async (req, res) => {
  const { status, data } = await categoryService.findAllCategories();

  return res.status(status).send(data);
};

module.exports = {
  postCategoryController,
  getCategoryController,
};