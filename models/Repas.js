'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class repas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  repas.init({
    idBABYS: DataTypes.INTEGER,
    contenant: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    hour: DataTypes.TIME,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'repas',
  });
  return repas;
};