'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    product: String,
    category: String,
    description: String,
    price: Number
})


module.exports = mongoose.model('products', ProductSchema)
