'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    static associate(models) {}
  }
  Test.init(
    {
      dataOne: {
        allowNull: false,
        type: DataTypes.STRING
      },
      dataTwo: {
        allowNull: false,
        type: DataTypes.STRING
      },
      dataThree: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Test',
      tableName: 'Tests',
      underscored: true
    }
  )
  return Test
}
