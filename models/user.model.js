const { DataTypes } = require('sequelize')
const {db}=require('../utils/db')
const User=db.define("User",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
            
    },
    firstname:{
        type:DataTypes.STRING,

    },
    lastname:{
        type:DataTypes.STRING
    },

})

module.exports=User