'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Users', [
      {
        email: 'mrs@winchester.com',
        username: 'MrsWinchester',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'mrsmr@warren.com',
        username: 'TheWarrens',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'stanley@hotel.com',
        username: 'SKing',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'amityville@house.com',
        username: 'TheLutzs',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'bhanharh@fort.com',
        username: 'YES Please come to my home',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'ancientram@inn.com',
        username: 'AncientRam',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'demo@user.com',
        username: 'DemoUser',
        hashedPassword: bcrypt.hashSync('password')
      }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['DemoUser', 'mansionUser', 'houseUser', 'cabinUser', 'hotelUser'] }
    }, {});
  }
};
