'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Algae extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Algae.init({
    name: DataTypes.STRING,
    genus: DataTypes.STRING,
    family: DataTypes.STRING,
    order: DataTypes.STRING,
    subclass: DataTypes.STRING,
    class: DataTypes.STRING,
    subphylum: DataTypes.STRING,
    phylum: DataTypes.STRING,
    kingdom: DataTypes.STRING,
    empire: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Algae',
  });
  return Algae;
};