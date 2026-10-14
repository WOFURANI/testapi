const {Sequelize} = require("sequelize");
const db=new Sequelize(
    {
        database: "backend",
        username: "root",
        password: "",
        dialect: "mysql",
        host: "localhost",
        port: 3306,
    }

)
async function testConnection(){
    try{
        await db.authenticate()
        console.log('Connection has been established successfully.');
    }catch(err){
        console.log("error connection database :",err.message)
    }
}


module.exports={db,testConnection}