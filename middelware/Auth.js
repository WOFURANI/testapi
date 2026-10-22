const jwt = require('jsonwebtoken')
const auth = (req, res, next) => {
    const token = req.cookies?.accessToken
    if (!token) {
        res.status(500).json({ message: 'user not authentificated' })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SCERET_ACCESS)
        req.user = decoded
        next()

    } catch (err) {
        console.log('you are not autheticated', err.message)
    }

}
module.exports = auth
