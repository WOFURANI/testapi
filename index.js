const test=require("express")
const app=test()
const port=3000
const {testConnection}=require('./utils/db')
const user=require('./models/user.model')
const userrouter=require('./routers/user.router')


const bodyparser=require('body-parser')

async function createtable(){
await user.sync()
}
try{
testConnection()
createtable()
}catch(err){
    console.logt(err.message)
}

app.use("/user",userrouter)





app.listen(port,()=>{
    console.log("this server is runnning ")
})

