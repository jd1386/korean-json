'use strict';
module.exports = (sequelize, DataTypes) => {
  const ApiStat = sequelize.define(
    'ApiStat',
    {
      resource: {
        type: DataTypes.STRING,
        allowNull: false
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },
    {}
  );
  ApiStat.associate = function(models) {};
  return ApiStat;
};
