'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.User, {foreignKey: userId});
    Booking.belongsTo(models.Spot, {foreignKey: spotId});
  };
  return Booking;
};
