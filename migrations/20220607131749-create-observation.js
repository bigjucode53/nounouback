'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('observations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idBABYS: {
        type: Sequelize.INTEGER
      },
      transmission: {
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
    await queryInterface.dropTable('observations');
  }
};