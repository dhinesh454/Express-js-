const express=require('express')

const route=express.Router();



route.get('/',(req,res,next)=>{
    res.send('<h1>Welcome to Home Page</h1>')
});

module.exports=route;