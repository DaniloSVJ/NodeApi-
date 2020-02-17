const express= require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')
const app = express();

app.use(express.json())
app.use(cors()) //Permite que outros endereços acesse nossa api
                //Você aplicat filtros de quais dominios você quer permitir


mongoose.connect('mongodb://localhost/nodeAPI',{ useNewUrlParser: true  });
//mongoose.Promise = global.Promise;
//require ('./src/models/Product')
requireDir('./src/models')
//const Product = mongoose.model('Product')



app.use('/api',require('./src/models/router'))

app.listen(3002);



