'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Users', [
     {
       username: 'DemoUser',
       email: 'demo@user.com',
       hashedPassword: bcrypt.hashSync('password')},
     {
       email: 'user1@user.io',
       username: 'FakeUser1',
       hashedPassword: bcrypt.hashSync('password')
     },
     {
       email: 'user2@user.io',
       username: 'FakeUser2',
       hashedPassword: bcrypt.hashSync('password')
     }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['DemoUser', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
