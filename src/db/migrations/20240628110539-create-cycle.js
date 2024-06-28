'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cycles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.DOUBLE
      },
      growth: {
        type: Sequelize.DOUBLE
      },
      biomass: {
        type: Sequelize.DOUBLE
      },
      lipid: {
        type: Sequelize.DOUBLE
      },
      carbs: {
        type: Sequelize.DOUBLE
      },
      protein: {
        type: Sequelize.DOUBLE
      },
      in_volume: {
        type: Sequelize.DOUBLE
      },
      out_volume: {
        type: Sequelize.DOUBLE
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      isDay: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Cycles');
  }
};