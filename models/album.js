'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define(
    'Album',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Album.associate = function(models) {};
  return Album;
};
