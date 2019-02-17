'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Post.associate = function(models) {};
  return Post;
};
