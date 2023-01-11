const ApiError = require("../error/apiError");
const bcrypt = require('bcrypt')
const jwtToken = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwtToken.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'},
        undefined
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Incorrect email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Incorrect email'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.user.id})
        const jwt = generateJwt(user.id, user.email,user.role )
        return res.json(jwt)
    }
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user) {
            return next(ApiError.badRequest('User is not found'))
        }
        let validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            return next(ApiError.badRequest('Wrong password'))
        }
        const jwt = generateJwt(user.id, user.email, user.role)
        return res.json({jwt})
    }
    async check(req, res, next) {
        const jwt = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json(jwt)
    }
}

module.exports = new UserController()