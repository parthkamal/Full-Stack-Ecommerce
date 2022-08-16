//importing the express module
const express = require('express')
const { addToCartController } = require('../controllers/cart')
const { requresSignIn, checkUserRoleMiddleware } = require('../middlewares/user')

const router= express.Router()

router.post('/cart/addtocart',requresSignIn,checkUserRoleMiddleware,addToCartController)

module.exports= router