'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Bookings', [
     {
       userId: 1,
       spotId: 2,
       startDate: '2022-10-06',
       endDate: '2022-10-16'
     },
     {
      userId: 2,
      spotId: 3,
      startDate: '2022-10-06',
       endDate: '2022-10-16'
    },
    {
      userId: 3,
      spotId: 4,
      startDate: '2022-10-06',
       endDate: '2022-10-16'
    },
    {
      userId: 4,
      spotId: 1,
      startDate: '2022-10-06',
       endDate: '2022-10-16'
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Bookings', null, {});
  }
};
