const express=require('express')

const route=express.Router();

route.get('/addproduct',(req,res,next)=>{

    res.send('<html><title>Addproduct</title><body><h1>Add Products</h1><br><form action="/admin/addproduct" method="POST"><input type="text" name="title"><br><input type="number" name="size"><br><button type="submit">Submit</button></form></body></html>')
    
    });

    route.post('/addproduct',(req,res,next)=>{
             console.log('Form-Data:' ,req.body);
            res.send('<h1>Product Submitted!</h1>')
    });



module.exports=route;