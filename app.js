'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

//Ejecutamos la funcion express
const app = express();

//Archivos de Rutas
const productRoutes = require('./routes/productRoute')

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

//Rutas

app.use('/api', productRoutes)



module.exports = app;