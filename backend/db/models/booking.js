'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    startDate: {
      type: DataTypes.DATE,
      validate: { isDate: true }
    },
    endDate: {
      type: DataTypes.DATE,
      validate: { isDate: true }
    },
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE
  }, {
    validate: {
    startDateFirst() {
      if (startDate.isAfter(endDate)) {
        throw new Error('Start date must come before end date.')
      }
    }
  }});
  Booking.associate = function(models) {
    Booking.belongsTo(models.User, {foreignKey: userId});
    Booking.belongsTo(models.Spot, {foreignKey: spotId});
  };
  return Booking;
};
