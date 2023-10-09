const { Category } = require('../models');

const postCategoryService = async (name) => {
  const newCategory = await Category.create({ name });

  if (!newCategory) return { status: 500, data: { message: 'Categoy not created' } };

  return { status: 201, data: newCategory };
};

const findAllCategories = async () => {
  const categories = await Category.findAll();
  if (!categories) return { status: 404, data: { message: 'Categoy not found' } };
  return { status: 200, data: categories };
};

module.exports = {
  postCategoryService,
  findAllCategories,
};