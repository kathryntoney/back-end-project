'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.dogs.belongsTo(models.owners, {foreignKey: 'id'})
      models.dogs.hasMany(models.messages, {foreignKey: 'dogID'})
    }
  }
  dogs.init({
    dogName: DataTypes.STRING,
    ownerID: DataTypes.INTEGER,
    zipcode: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER,
    fixed: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    faveToy: DataTypes.STRING,
    faveGame: DataTypes.STRING,
    faveTreat: DataTypes.STRING,
    energy: DataTypes.STRING,
    size: DataTypes.STRING,
    imageURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dogs',
  });
  return dogs;
};