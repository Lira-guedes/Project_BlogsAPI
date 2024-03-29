module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
        },
    }, {
        tableName: 'posts_categories',
        timestamps: false,
        underscored: true,
    });
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, { through: PostCategory, foreignKey: 'postId', otherKey: 'categoryId', });
      models.Category.belongsToMany(models.BlogPost, { through: PostCategory, foreignKey: 'categoryId', otherKey: 'postId',});
    };
    return PostCategory;
};