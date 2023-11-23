const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const fresh = require("../models/fresh");
const electronic = require("../models/electronic");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(fresh);
User.hasMany(electronic);

module.exports = User;
