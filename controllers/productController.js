'use strict'

const Product = require('../models/ProductModel')

exports.createProduct = async (req, res) => {
    try {
        let product;
        product = new Product(req.body);

        await product.save();
        console.log(req.body)

        return res.send(product);
        
    } catch (error) {
        return res.status(500).send({
            message: `Product could not be saved, error: ${error}`
        });
    }
}

exports.consultProducts = async (req, res) => {

    try {
        const products = await Product.find();
        res.status(200).json(products);

    } catch (error) {
        return res.status(500).send({
            message: `Products not found, error: ${error}`
        })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const { product, category, description, price } = req.body;
        let productUpdate = await Product.findById(req.params.id)

        if (!productUpdate) {
            res.status(404).json({ msg: `The product not exits!` })
        }

        productUpdate.product = product;
        productUpdate.category = category;
        productUpdate.description = description;
        productUpdate.price = price;
        

        productUpdate = await Product.findOneAndUpdate({ _id: req.params.id },productUpdate,{ new: true })

        res.json(productUpdate)

    } catch (error) {
        return res.status(500).send({
            message: `Products not update, error: ${error}`
        })
    }
}

exports.consultProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({msg: `Product does not exist`})
        }
        
        res.status(200).json(product);

    } catch (error) {
        return res.status(500).send({
            message: `Products not found, error: ${error}`
        })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({msg: `Product does not exist`})
        }
        
        await Product.findOneAndDelete({ _id: req.params.id});
        res.status(200).json({ msg: `Product was successfully removed`});

    } catch (error) {
        return res.status(500).send({
            message: `Products not found, error: ${error}`
        })
    }
}
