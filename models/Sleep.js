'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sleep extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sleep.init({
    idBABYS: DataTypes.INTEGER,
    hsleep: DataTypes.TIME,
    hwake: DataTypes.TIME,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'sleep',
  });
  return sleep;
};