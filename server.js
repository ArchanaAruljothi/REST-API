require('dotenv').config();
const http=require('http');
const app = require('./app');


// let server= http.createServer((req,res)=>{
//     res.write("server created successfully");
//     res.end();
// });


let port = process.env.PORT;
let host = process.env.HOST;

let server=http.createServer(app);

server.listen(7777,()=>{
    console.log("my server get started");
})