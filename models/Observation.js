'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class observation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  observation.init({
    idBABYS: DataTypes.INTEGER,
    transmission: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'observation',
  });
  return observation;
};