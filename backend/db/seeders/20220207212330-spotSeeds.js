'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Spots', [
     {
       userId: 1,
       name: 'Haunted Mansion',
       description: 'A VERY haunted but fun mansion.',
       address: '100 Mansion Rd',
       city: 'Mansion',
       state: 'New York',
       country: 'North America',
       price: 1000.00
     },
     {
      userId: 2,
      name: 'Haunted House',
      description: 'A haunted house and not the halloween kind.',
      address: '200 House Ln',
      city: 'House',
      state: 'Arkansas',
      country: 'North America',
      price: 576.79
    },
    {
      userId: 3,
      name: 'Haunted Cabin',
      description: 'A haunted cabin in the woods of Montana.',
      address: '300 Cabin Vw',
      city: 'Cabin',
      state: 'Montana',
      country: 'North America',
      price: 450.50
    },
    {
      userId: 4,
      name: 'Haunted Hotel',
      description: 'A haunted hotel in the middle of Nowhere.',
      address: '666 Route 666',
      city: 'Nowhere',
      state: 'Nebraska',
      country: 'North America',
      price: 199.99
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Spots', null, {});
  }
};
