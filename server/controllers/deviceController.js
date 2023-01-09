const uuid = require('uuid')
const filePath = require('path')
const {Device} = require('../models/models')
const ApiError = require('../error/apiError')

class DeviceController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg" // v4: fn generates unique id
            await img.mv(filePath.resolve(__dirname, '..', 'static', fileName)) // mv: fn moves files to folder, resolve: fn adapts the specified path to the operating system

            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {

    }
    async getOne(req, res) {

    }
}

module.exports = new DeviceController()