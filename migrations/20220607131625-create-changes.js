'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('changes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idBABYS: {
        type: Sequelize.INTEGER
      },
      hchanges: {
        type: Sequelize.TIME
      },
      pee: {
        type: Sequelize.BOOLEAN
      },
      pooh: {
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
    await queryInterface.dropTable('changes');
  }
};