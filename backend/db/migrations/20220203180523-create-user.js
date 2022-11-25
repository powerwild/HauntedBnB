'use strict';
const { Validator } = require('sequelize');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(30),
        unique: true,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error('Username cannot be an email.')
            }
          }
        }
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(256),
        unique: true,
        validate: {
          len: [3, 256],
          checkEmail(value) {
            if (!Validator.isEmail(value)) {
              throw new Error('Email must be a valid email.')
            }
          }
        }
      },
      hashedPassword: {
        allowNull: false,
        type: Sequelize.STRING.BINARY,
        validate: {
          len: [60, 60]
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    }, options);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users', options);
  }
};
