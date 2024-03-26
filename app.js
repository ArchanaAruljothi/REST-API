require('dotenv').config();
const express=require('express');
const app = express();
const morgan=require('morgan');
const bodyParser=require('body-parser')
const mongoose=require('mongoose');

const productRoutes =require('./api/routes/products')
const orderRoutes =require('./api/routes/orders')
const userRoutes=require('./api/routes/users')


// app.use((req,res,next)=>{
//     res.status(200).json({
//        msg:"This is simple get request"
//     });
// });
//use of Morgan
app.use(morgan("dev"));

//mongoose connection string 
mongoose.connect("mongodb+srv://archanaaarul:"+process.env.MONGO_ATLAS_PW+"@cluster0.eufyll2.mongodb.net/",{
    useNewUrlParser:true
}).then(()=>{console.log("connected Succesfully with MangoDb Atlas")});

//body parser code
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// code to habdle CORS Error
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Header","Origin,X-Requested-Width,Content-Type,Accept,Authorization");
    res.header("Access-Control-Allow-Credentials",true);
    if(res.header==="OPTIONS"){
        res.header("Access-Control-Allow-Method","PUT","POST","DELETE","GET");
        return res.status(200).json();
    }
    next();
})


app.use("/products",productRoutes);
app.use("/orders",orderRoutes);
app.use("/users",userRoutes);


//handle error by using middle
app.use((req,res,next)=>{
    const error = new Error("Route Not Found");
    // error.status(error==404);
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(500).json({
        error:error.message
    })
})

module.exports = app;