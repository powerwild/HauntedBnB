'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Messages', [
     {
       recipientId: 4,
       senderId: 1,
       spotId: 4,
       message: 'Thank you for the superb service.'
     },
     {
      recipientId: 1,
      senderId: 2,
      spotId: 1,
      message: 'Please include an option to limit the number of ghosts passing through a room.'
    },
    {
      recipientId: 3,
      senderId: 2,
      spotId: 3,
      message: 'I was wondering if there will be any animal ghosts?'
    },
    {
      recipientId: 2,
      senderId: 1,
      spotId: 2,
      message: 'Does the house have a basement? I do so love basements.'
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Messages', null, {});
  }
};
