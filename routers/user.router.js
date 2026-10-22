const express = require('express')
const auth = require('../middelware/Auth')
const router = express()
const usercontroller = require('../controllers/user.controller')
router.get("/showall", usercontroller.showall)
router.get("/:id", auth(), usercontroller.showuserbyid)

module.exports = router