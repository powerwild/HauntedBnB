'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          min: 4
        }
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
        validate: {
          min: 4
        }
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          min: 4
        }
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          min: 3
        }
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          min: 4
        }
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          min: 4
        }
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2)
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};
