const User = require('../models/user.model')
const bycrpt = require('bcrypt')
const jwt = require('jsonwebtoken')
const uuid = require('uuid')

const usercontroller = {
    showall: async (req, res) => {
        try {
            const users = await User.findAll(
            )
            res.send(users)


        } catch (err) {
            console.log("error creation user", err.message)
        }




    }
    , login: async (req, res) => {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ username: username }).catch((err) => {
                console.log("error login ", err)
            })
            if (!user) {
                res.status(500).json({ message: ' User not found' })
            }
            // const hashedpass = bycrpt.hash(password,10)
            const testpat = await bycrpt.compare(user.password, password)
            if (!testpat) {
                res.status(500).json({ message: 'password incorrect' })
            }
            const accessToken = accessToken(user, '15m')
            res.cookies(accessToken)

            res.status(200).json({ message: 'logged in successfully ' })
        } catch (err) {
            console.log('error in login :', err)
        }

    }, register: async (req, res) => {
        try {
            const { firstname, lastname, username, password } = req.body
            const userexist = await User.findOne({ username: username })
            if (userexist) {
                res.status(500).json({ message: 'user Found!!!' })
            }
            const id = uuid()
            const hashpassword = bycrpt.hash(password, 10)
            const user = await User.create({ id, firstname, lastname, username, password: hashpassword }).catch((err) => {
                console.log("error in creating user", err.message)
            })
            res.status(201).json({ message: 'user created' })
        } catch (err) {
            console.log("error in creating user", err.message)
        }


    }
}
const accessToken = (data, expire) => {
    // 15 m    15m
    //7d 
    //1M
    //1 y

    return jwt.sign(data, process.env.JWT_SCERET_ACCESS, { expiresIn: expire });
}
const refreshToken = (data, expire) => {
    return jwt.sign(data, process.env.JWT_SCERET_REFRESH, {
        expiresIn: expire
    })
}
module.exports = usercontroller