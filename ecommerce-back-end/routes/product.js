const express = require('express')
const { createProductController, getProductController, deleteProductController } = require('../controllers/product')
const router = express.Router()
const path = require('path')

//for uploading files with multiform-data
const multer = require('multer')
//destination of the stored files in server
const shortid = require('shortid')
const { requresSignIn, checkAdminRoleMiddleware } = require('../middlewares/user')
const { validateProductCreateRequest } = require('../validators/product')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + file.originalname)
    }
})

const upload = multer({ storage })
//post request for the product create which is again admin protected
router.post('/product/create',validateProductCreateRequest ,requresSignIn, checkAdminRoleMiddleware, upload.array('productPictures'), createProductController)
router.delete('/product/delete', deleteProductController)
//get request for the product list accessible to anyone
router.get('/product/get', getProductController)

module.exports = router