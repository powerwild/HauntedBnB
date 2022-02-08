'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    price: DataTypes.DECIMAL(6, 2),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Spot.associate = function(models) {
    Spot.belongsTo(models.User, {foreignKey: 'userId'});
    Spot.hasMany(models.Image, {foreignKey: 'spotId', onDelete: 'cascade'});
    Spot.hasMany(models.Booking, {foreignKey: 'spotId', onDelete: 'cascade'});
    Spot.hasMany(models.Review, {foreignKey: 'spotId', onDelete: 'cascade'});
    Spot.hasMany(models.Message, {foreignKey: 'spotId', onDelete: 'cascade'});
  };
  return Spot;
};
