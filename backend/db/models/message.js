'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    recipientId: DataTypes.INTEGER,
    senderId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    message: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE
  }, {});
  Message.associate = function(models) {
    Message.belongsTo(models.User, {foreignKey: 'recipientId'});
    Message.belongsTo(models.User, {foreignKey: 'senderId'});
    Message.belongsTo(models.Spot, {foreignKey: 'spotId'});
  };
  return Message;
};
