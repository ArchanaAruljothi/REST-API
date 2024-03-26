const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const orderSchema = Schema({
    _id:Schema.Types.ObjectId,
    productId:{type:Schema.Types.ObjectId,ref:"Product",require:true},
    quantity:{type:Number,default:1},
    date:{type:String},
    place:{type:String}
});

module.exports=mongoose.model("Order",orderSchema);


