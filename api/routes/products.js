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
// const mongoose = require('mongoose');
// const Product = require('../model/productModel');
const productModelRequest=require('../controller/product.model')




//get request for product
router.get("/",productModelRequest.get_products);
// router.get("/",(req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple get request for product"
//     });
// })
//post request for product
// router.post("/",(req,res,next)=>{
//     // const productObj={
//     //     name:req.body.name,
//     //     price:req.body.price
//     // }
    
// });
//post request for product
router.post("/",upload.single("productImage"),productModelRequest.create_product);

//get request for single product
router.get("/:productId",productModelRequest.get_product_ById);

// router.post("/:productId",(req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple get request for single product"
//     });
// });
//put request for single product

router.put("/:productId",productModelRequest.update_product);

//  router.put("/:productId",(req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple put request for single product"
//     });
//  });
//delete request for single product
router.delete("/:productId",productModelRequest.delete_product);
// router.delete("/:productId",(req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple delete request for single product"
//     });
// });

module.exports=router;