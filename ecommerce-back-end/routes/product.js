const express=require('express')
const router=express.Router()

//post request for the product create which is again admin protected
router.post('/product/create',(req,res)=>{
    res.status(200).json({message:"hello from the product create route"})
})


//get request for the product list accessible to anyone
router.get('/product/get',(req,res)=>{
    res.status(200).json({message:"hello from the product get route"})
})

module.exports=router