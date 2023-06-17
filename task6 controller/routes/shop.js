const express=require('express')
const rootDir=require('../utils/path')

const route=express.Router();

const path=require('path')

const shopController=require('../controller/product');

route.get('/',shopController.homePage)

module.exports=route;