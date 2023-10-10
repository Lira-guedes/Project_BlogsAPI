'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          key: 'id',
          model: 'blog_posts',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          key: 'id',
          model: 'categories',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    })

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories')

  }
};