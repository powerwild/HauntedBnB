'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Users', [
     {
       email: 'mansion@user.com',
       username: 'mansionUser',
       hashedPassword: bcrypt.hashSync('password')},
       {
         email: 'house@user.com',
         username: 'houseUser',
         hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'cabin@user.com',
          username: 'cabinUser',
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'hotel@user.com',
          username: 'hotelUser',
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
