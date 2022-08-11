//importing the express module
const express=require('express');
const { createCatergoryController, getCategoryController } = require('../controllers/category');
const router=express.Router();


//get and post routes for the category model which will be ulimately handled by the model controller
router.post('/category/create',createCatergoryController)

router.get('/category/get',getCategoryController)

//exporting the router so that it can be used by the server from index.server.js
module.exports=router