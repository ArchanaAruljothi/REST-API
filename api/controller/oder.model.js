const mongoose = require('mongoose');
const Order = require('../model/orderModel');

//code for creating order
exports.create_order = async (req,res,next)=>{
    try{
        const orderObj = new Order({
            _id:new mongoose.Types.ObjectId(),
            product:req.body.productId,
            quantity:req.body.quantity,
            date:req.body.date,
            place:req.body.place,
        });
        const data = await orderObj.save();
        res.status(200).json({
            code:1,
            message:"order created successfully",
            data:data,
            error:null
        });
    }catch(error){
        res.status(500).json({
            code:0,
            message:"Something went wrong",
            data:null,
            error:error
        })
    }
}

//code for geting order list 
exports.get_orders =async (req,res,next)=>{
    try{
          const data = await Order.find()
          if(data){
            res.status(200).json({
                code:1,
                message:"This is simple get request",
                data:data,
                error:null
            })
          }else{
            res.status(200).json({
                code:1,
                message:"No Data Available",
                data:null,
                error:null
            })

          }
    }catch(error){
        res.status(500).json({
            code:0,
            message:"Something Went Wrong",
            data:null,
            error:error
        })

    }
}

//code for getting single order from list 
exports.get_order_ById = async (req,res,next)=>{
    try{
            const data = await Order.findById(req.params.orderId);
            if(data){
                    res.status(200).json({
                    code:1,
                    message:"This is simple get request for single product",
                    data:data,
                    error:null
                });
            }else{
                res.status(200).json({
                    code:1,
                    message:"no product is available in give id",
                    data:null,
                    error:null

                });
            }    
    }catch(error){
        res.status(500).json({
            code:0,
            message:"Something went wrong",
            data:null,
            error:error
         });
           

    }
}     

//code for deleting single order from list
exports.delete_order = async (req,res,next)=>{
    try{
       const data= await Order.findByIdAndDelete(req.params.orderId);
       if(!data){
          res.status(404).json({
            code:1,
            message:"No Product Found",
            data:data,
            error:null
        })
       }else{
        res.status(404).json({
            code:1,
            message:"delete request perform  successfully",
            data:data,
            error:null
            })
       }
    }catch(error){
        res.status(500).json({
            code:0,
            message:"Something went wrong",
            data:null,
            error:error
        })

    }
}