'use strict';

let options = {};
options.tableName = 'Bookings';
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert(options, [
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
   return queryInterface.bulkDelete(options);
  }
};
