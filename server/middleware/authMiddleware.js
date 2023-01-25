const jwtToken = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const jwt = req.headers.authorization.split(' ')[1]
        console.log('token', jwt)
        if (!jwt) {
            return res.status(401).json({message: "User not authorized"})
        }
        req.user = jwtToken.verify(jwt, process.env.SECRET_KEY)
        next()
    } catch (e) {
        return res.status(401).json({message: "User not authorized"})
    }
}