'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    spotId: DataTypes.INTEGER,
    url: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Spot, {foreignKey: 'spotId'});
  };
  return Image;
};
