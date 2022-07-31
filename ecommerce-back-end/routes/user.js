const express = require('express')
const router=express.Router()

router.post('/signin',(req,res,next)=>{
    res.status(200).json({
        message:"hello from the post sigin route"
    })
})

router.post('/signup',(req,res,next)=>{
    res.status(200).json({
        message:"hello from the post signup route"
    })
})

module.exports=router