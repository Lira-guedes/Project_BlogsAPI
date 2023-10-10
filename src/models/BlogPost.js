module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: DataTypes.STRING,
          allowNull: false
        },
        userId: {
          type: DataTypes.INTEGER,
          foreignKey: true,
        },
        published: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        updated: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
    }, {
        underscored: true,
        tableName: 'blog_posts',
        timestamps: false,
    });
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, { foreignKey: 'userId' });
    };
    return BlogPost;
};