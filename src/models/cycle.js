'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cycle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cycle.init({
    type: DataTypes.STRING,
    duration: DataTypes.DOUBLE,
    growth: DataTypes.DOUBLE,
    biomass: DataTypes.DOUBLE,
    lipid: DataTypes.DOUBLE,
    carbs: DataTypes.DOUBLE,
    protein: DataTypes.DOUBLE,
    in_volume: DataTypes.DOUBLE,
    out_volume: DataTypes.DOUBLE,
    isActive: DataTypes.BOOLEAN,
    isDay: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Cycle',
  });
  return Cycle;
};