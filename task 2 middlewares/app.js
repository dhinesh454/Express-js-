const express= require('express');
const app=express();
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded());   //in this body parse middleware inbuildly call next function so no need to mention next 


app.use('/addproduct',(req,res,next)=>{

    res.send('<html><title>Addproduct</title><body><h1>Add Products</h1><br><form action="/storeproducts" method="POST"><input type="text" name="title"><br><input type="number" name="size"><br><button type="submit">Submit</button></form></body></html>')
    
    });

    app.use('/storeproducts',(req,res,next)=>{
             console.log('Form-Data:' ,req.body);
            res.send('<h1>Product Submitted!</h1>')
    });

app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome to Home Page</h1>')
});






app.listen(3000);