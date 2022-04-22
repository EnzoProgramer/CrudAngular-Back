'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const port = 3000

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/angularCrud")
        .then(()=>{
            console.log('Connection Success');
            //CREACION DEL SERVIDOR
            app.listen(port, () => {
                console.log(`Sever app listening on port ${port}`)
                })
        })
    .catch(err => console.log(err));
