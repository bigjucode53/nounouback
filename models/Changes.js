'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class changes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  changes.init({
    idBABYS: DataTypes.INTEGER,
    hchanges: DataTypes.TIME,
    pee: DataTypes.BOOLEAN,
    pooh: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'changes',
  });
  return changes;
};