'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Baby extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Baby.belongsTo(models.User, {
        foreignKey: {
          name: "idUser",
          allownull: false,
        },
      });
      models.User.hasMany(models.changes);
      models.User.hasMany(models.horaire);
      models.User.hasMany(models.observation);
      models.User.hasMany(models.repas);
      models.User.hasMany(models.sleep);
      // define association here
    }
  }
  Baby.init({
    idUSERS: DataTypes.INTEGER,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Baby',
  });
  return Baby;
};