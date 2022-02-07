'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    price: DataTypes.DECIMAL(6, 2),
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE
  }, {});
  Spot.associate = function(models) {
    Spot.belongsTo(models.User, {foreignKey: userId});
    Spot.hasMany(models.Image, {foreignKey: spotId});
    Spot.hasMany(models.Booking, {foreignKey: spotId});
    Spot.hasMany(models.Review, {foreignKey: spotId});
    Spot.hasMany(models.Message, {foreignKey: spotId});
  };
  return Spot;
};
