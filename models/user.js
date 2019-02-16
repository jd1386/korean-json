'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      phone: {
        type: DataTypes.STRING
      },
      website: {
        type: DataTypes.STRING
      },
      province: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      district: {
        type: DataTypes.STRING
      },
      street: {
        type: DataTypes.STRING
      },
      zipcode: {
        type: DataTypes.STRING
      }
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
