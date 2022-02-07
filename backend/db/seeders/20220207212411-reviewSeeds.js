'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [
     {
      userId: 1,
      spotId: 4,
      review: 'It was very cozy with all of the spider webs. Reminded me of my haunted mansion.'
     },
     {
      userId: 2,
      spotId: 1,
      review: 'Too many ghosts! I prefer my house that only has a couple.'
     },
     {
      userId: 3,
      spotId: 2,
      review: 'Glad to get away from the mountains. This house had eveything I wanted for a getaway.'
     },
     {
      userId: 4,
      spotId: 3,
      review: 'I needed this! There is nothing like going to sleep and waking up tied up in a tree. Awwww nature.'
     }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
