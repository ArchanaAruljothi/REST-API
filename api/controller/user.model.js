const mongoose=require('mongoose');
const User=require('../model/userModel');
 
//code for post request for user
exports.create_users=async(req,res,next)=>{
    try{
        const userObj=new User({
            _id:new mongoose.Types.ObjectId(),
            email:req.body.email,
            password:req.body.password,
            role:req.body.role,
   
        });
       
    const data=await userObj.save()
       
        res.status(200).json({
            code:1,
            msg:"This is single post request for user",
            createdUser:data,
            error:null
           
        });
 
    }catch(err){
        res.status(200).json({
            code:0,
            msg:"Something went wrong",
            createdUser:null,
            error:err
           
        });
 
    }
 
}
//code for getting user list
exports.get_users=async(req,res,next)=>{
    try{
        const data=await User.find();
        if(data){
            res.status(200).json({
            code:1,
            msg:"This is get request for user",
            data:data,
            error:null
            });
        }else{
            res.status(200).json({
                code:1,
                msg:"No data available",
                data:null,
                error:null
            });
 
        }
 
    }catch(error){
        res.status(500).json({
            code:0,
            msg:"something went wrong",
            data:null,
            error:error
        });
       
    }
}
 
// code for getting single user
exports.get_user_ById = async (req,res,next)=>{
    try{
                const data = await User.findById(req.params.userId);
                if(data){
                   res.status(200).json({
                    code:1,
                    message:"This is simple get request for single user",
                    data:data,
                    error:null
                   });
                }else{
                    res.status(200).json({
                        code:1,
                        message:"no user is available with given id",
                        data:null,
                        error:null
                    });
                }
    }catch(error){
        res.status(500).json({
            code:0,
            message:"Somthing went wrong",
            data:null,
            error:error
        })
    }
}
//code for update single user
exports.update_user=async(req,res,next)=>{
    try{
        const data=await User.findByIdAndUpdate(req.params.userId,req.body,{new:true,runValidator:true})
        res.status(200).json({
            code:1,
            message:"This is simple put request for single user",
            data:data,
            error:null
 
        })
    }catch(error){
        res.status(500).json({
            code:0,
            message:"something went wrong",
            data:null,
            error:error
 
    })
}
}
//code for deleting user
exports.delete_user=async (req,res,next)=>{
    try{
       const data= await User.findByIdAndDelete(req.params.userId);
       if(!data){
        res.status(404).json({
            code:1,
            message:"no user found",
            data:data,
            error:null
        })
       }else{
        res.status(404).json({
            code:1,
            message:"delete request perform successfully",
            data:data,
            error:null
        })
 
       }
 
    }catch(error){
        res.status(500).json({
            code:0,
            message:"something went wrong",
            data:data,
            error:error
        })
 
    }
}
 