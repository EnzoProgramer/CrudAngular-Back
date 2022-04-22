'use strict'

const express = require('express')
const productController = require('../controllers/productController')

const router = express.Router()

router.post('/createProduct', productController.createProduct)
router.get('/consultProducts', productController.consultProducts)
router.put('/updateProduct/:id', productController.updateProduct)
router.get('/consultProduct/:id', productController.consultProduct)
router.delete('/deleteProduct/:id', productController.deleteProduct)


module.exports = router;