'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('horaires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idBABYS: {
        type: Sequelize.INTEGER
      },
      harrive: {
        type: Sequelize.DATE
      },
      hleave: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('horaires');
  }
};