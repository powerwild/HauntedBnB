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
      name: 'Winchester House',
      description: '',
      address: '525 S Winchester Blvd',
      city: 'San Jose',
      state: 'California',
      country: 'North America',
      price: 100.10
    },
    {
      userId: 2,
      name: 'Museum Of The Warrens',
      description: '',
      address: '30 Knollwood St',
      city: 'Monroe',
      state: 'Connecticut',
      country: 'North America',
      price: 96.69
    },
    {
      userId: 3,
      name: 'Amityville House',
      description: 'It was thought that the house became haunted after Ronald DeFeo, Jr., murdered his six family members at 112 Ocean Avenue in Amityville in 1974. A year after the murders, another family moved in and then abruptly moved out, claiming the house was haunted.',
      address: '112 Ocean Avenue',
      city: 'Amityville, Long Island',
      state: 'New York',
      country: 'North America',
      price: 66.99
    },
    {
      userId: 4,
      name: 'Bhangarh Fort',
      description: 'Two hundred miles from Delhi, this abandoned fortress sticks out in the middle of the desert. Legend has it that a sorcerer cast a curse on the area after being rejected by a local princess.',
      address: 'Tehsil, Gola ka baas',
      city: 'Rajgarh, Bhangarh',
      state: 'Rajasthan',
      country: 'India',
      price: 5.00
    },
    {
      userId: 5,
      name: 'The Ancient Ram Inn',
      description: 'This 12th-century inn is one of the oldest in the Western world. It is believed to have once been a pagan burial ground, and boasts that it is haunted by more than 20 spirits, including ghost children and a pagan high priestess. Fearless travelers can book a ghost hunt at the inn in hopes of experiencing the spirits themselves. ',
      address: ' 8 Potters Pond',
      city: 'Wotton-under-Edge',
      state: 'GL12 7HF',
      country: 'United Kingdom',
      price: 200.00
    },
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
