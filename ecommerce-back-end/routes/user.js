const express = require('express')
const router=express.Router()

//importing controllers for the router
const {signin,signup}=require('../controllers/user')
const {requresSignIn}=require('../middlewares/user')

router.post('/signin',signin)
router.post('/signup',signup)

//this profile route will taken token from the authorisation header(implemented inside prerequireSignIn middleware)
//the middle ware will check whether the token is valid or not if(not)profile page will not be accessible in this way we have created a protected route
router.post('/profile',requresSignIn,(req,res)=>{
    return res.status(200).json({
        user:req.user,message:"welcome to the home user"
    })
})


module.exports=router