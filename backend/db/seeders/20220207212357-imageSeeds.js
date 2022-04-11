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
      url: 'https://s.hdnux.com/photos/01/12/13/74/19447552/3/rawImage.jpg'
    },
    {
     spotId: 2,
     url: 'https://i2-prod.mirror.co.uk/incoming/article11016351.ece/ALTERNATES/s1227b/Warrens-Occult.jpg'
   },
   {
     spotId: 3,
     url: 'https://www.djtricities.com/amityville/images/rescent1.jpg'
   },
   {
     spotId: 4,
     url: 'https://www.indianeagle.com/travelbeats//wp-content/uploads/2014/12/Bhangarh-most-haunted-places-to-see-in-India.jpg'
   },
   {
     spotId: 5,
     url: 'https://upload.travelawaits.com/ta/uploads/2021/04/the-ancient-ram-inn-in-englan26e00c.jpg'
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
