const express=require('express')
const router=express()
const usercontroller=require('../controllers/user.controller')
router.get("/showall",usercontroller.showall)

module.exports=router