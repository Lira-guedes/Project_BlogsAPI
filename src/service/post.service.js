const { PostCategory, BlogPost } = require('../models');

const postPostService = async (title, content, categoryIds, userId) => {
  const newPost = await BlogPost.create({ title, content, userId });

  await PostCategory.bulkCreate(categoryIds.map((categoryId) => 
    ({
      postId: newPost.id,
      categoryId,
    })));

  return { status: 201, data: newPost }; 
};

module.exports = {
  postPostService,
};