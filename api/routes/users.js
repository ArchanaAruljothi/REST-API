const express=require('express');
const router=express.Router();
const userModelRequest=require('../controller/user.model');
//get request for user
router.get("/",userModelRequest.get_users);
 //post request for user
router.post("/",userModelRequest.create_users);
//get request for single user
router.get("/:userId",userModelRequest.get_user_ById);
//put request for single user
router.put("/:userId",userModelRequest.update_user);
//delete request for single user
router.delete("/:userId",userModelRequest.delete_user);
//get request for single user
router.get("/:userId",(req,res,next)=>{
    res.status(200).json({
        msg:"This is simple get request for single user"
    });
});
//put request for single user
router.put("/:userId",(req,res,next)=>{
    res.status(200).json({
        msg:"This is simple put request for single user"
    });
});
//delete request for single product
router.delete("/:userId",(req,res,next)=>{
    res.status(200).json({
        msg:"This is simple delete request for single user"
    });
});
module.exports=router;