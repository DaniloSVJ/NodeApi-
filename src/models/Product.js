//Schema são os campos que esse produto pode ter e que tipo de 
//valores esse campos podem salvar
const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        require: true
    },
    description:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    },
    createAt:{
        type:Date,
        default:Date.now
    }
});   
ProductSchema.plugin(mongoosePaginate) 
mongoose.model("Product",ProductSchema);