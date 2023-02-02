const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const authMiddleWare = require('../middleware/authMiddleware')

router.post('/', authMiddleWare,  basketController.addToBasket)
router.get('/', authMiddleWare, basketController.getBasketUser)
// router.delete('/', authMiddleWare, basketController.removeFromBasket)
router.delete('/', authMiddleWare, basketController.clearBasket)

module.exports = router