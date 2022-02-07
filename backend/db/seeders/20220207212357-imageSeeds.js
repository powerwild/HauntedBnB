'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Images', [
     {
       spotId: 1,
       url: 'https://static.greatbigcanvas.com/images/singlecanvas_thick_none/mgl-licensing/haunted-house-ii,1054453.jpg'
     },
     {
      spotId: 2,
      url: 'https://i.cbc.ca/1.5571885.1589564553!/fileImage/httpImage/image.jpeg_gen/derivatives/16x9_940/creepy-haunted-bandoned-house-in-rural-nova-scotia.jpeg'
    },
    {
      spotId: 3,
      url: 'https://s3.amazonaws.com/static-loghome/media/base64image_ceymcjjtwe_Article186878_20191021114840.jpeg'
    },
    {
      spotId: 4,
      url: 'https://img1.10bestmedia.com/Images/Photos/381016/1886-Crescent-Hotel---Spa_54_990x660.jpg'
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Images', null, {});
  }
};
