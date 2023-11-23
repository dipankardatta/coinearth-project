const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Electronic = sequelize.define("Electronic", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Electronic;
