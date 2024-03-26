const express = require('express');
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./upload/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload = multer({storage:storage});
const orderModelRequest = require('../controller/oder.model')

// get request for orders
router.get("/",orderModelRequest.get_orders);

// router.get("/",(req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple get request for orders"
//     });
// })


//post request for orders
// router.post("/",(req,res,next)=>{
//     const orderObj={
//         productId:req.body.productId,
//         quantity:req.body.quantity
//     }
//     res.status(200).json({
//         msg:"This is simple post request for orders",
//         createdProduct:orderObj
//     });
// })


//post request for order
 router.post("/",upload.single("orderImage"),orderModelRequest.create_order)


//get request for single product
router.get("/:orderId",orderModelRequest.get_order_ById);
// router.get("/:ordersId",(req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple get request for single orders"
//     });
// });


//delete request for single product
 router.delete("/:orderId",orderModelRequest.delete_order)
// router.delete("/:ordersId",(req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple delete request for single orders"
//     });
// });


module.exports=router;