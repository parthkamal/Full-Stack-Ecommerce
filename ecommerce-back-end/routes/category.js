//importing the express module
const express=require('express');
const { createCatergoryController, getCategoryController, deleteCategoryController } = require('../controllers/category');
const { requresSignIn, checkAdminRoleMiddleware } = require('../middlewares/user');
const router=express.Router();


//get and post routes for the category model which will be ulimately handled by the model controller
router.post('/category/create',requresSignIn,checkAdminRoleMiddleware,createCatergoryController)

router.get('/category/get',getCategoryController)
router.delete('/category/delete',deleteCategoryController)

//exporting the router so that it can be used by the server from index.server.js
module.exports=router