'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class horaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  horaire.init({
    idBABYS: DataTypes.INTEGER,
    harrive: DataTypes.DATE,
    hleave: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'horaire',
  });
  return horaire;
};