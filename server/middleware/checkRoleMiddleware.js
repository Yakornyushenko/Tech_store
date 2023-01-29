const jwtToken = require('jsonwebtoken')

module.exports = function(role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next()
        }
        try {
            const jwt = req.headers.authorization.split(' ')[1]
            if (!jwt) {
                return res.status(401).json({message: "User not authorized"})
            }
            const decoded = req.user = jwtToken.verify(jwt, process.env.SECRET_KEY, undefined, undefined)
            if (decoded.role !== role) {
                return res.status(403).json({message: "You don't have access"})
            }
            next()
        } catch (e) {
            return res.status(401).json({message: "User not authorized"})
        }
    }
}

