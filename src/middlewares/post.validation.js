const { Category } = require('../models');

const postValidation = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const categories = (await Category.findAll()).map((data) => data.id);
  const invalidCategories = categoryIds.filter((ids) => !categories.includes(ids));

  if (invalidCategories.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

module.exports = {
  postValidation,
};