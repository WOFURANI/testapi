const { DataTypes } = require('sequelize')
const { db } = require('../utils/db')
const User = db.define("User", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,

    },
    firstname: {
        type: DataTypes.STRING,

    },
    lastname: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

module.exports = User