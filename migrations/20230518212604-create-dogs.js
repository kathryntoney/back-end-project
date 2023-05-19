'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dogName: {
        type: Sequelize.STRING
      },
      ownerID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'owners',
          key: 'id'
        }
      },
      zipcode: {
        type: Sequelize.INTEGER
      },
      breed: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      fixed: {
        type: Sequelize.BOOLEAN
      },
      description: {
        type: Sequelize.STRING
      },
      faveToy: {
        type: Sequelize.STRING
      },
      faveGame: {
        type: Sequelize.STRING
      },
      faveTreat: {
        type: Sequelize.STRING
      },
      energy: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      imageURL: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dogs');
  }
};