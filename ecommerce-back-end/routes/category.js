//importing the express module
const express=require('express')
const router=express.Router();


//get and post routes for the category model which will be ulimately handled by the model controller
router.post('/category/create',(req,res)=>{
    res.status(200).json({
        message:"create category route"
    })
})

router.get('/category/get',(req,res)=>{
    res.status(200).json({
        message:"get category route"
    })
})

//exporting the router so that it can be used by the server from index.server.js
module.exports=router