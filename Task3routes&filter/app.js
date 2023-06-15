const express=require('express');
const app=express();

const bodyParser=require('body-parser');

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');


app.use(bodyParser.urlencoded())
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);


app.use((req,res,next)=>{
    res.status(404).send('<h1>404 Error Found</h1><p>Please! check the url</p>')
})

app.listen(3000)
