const express = require('express')
const router=express.Router()

//importing controllers for the router
const {signin,signup}=require('../controllers/user')

router.post('/signin',signin)
router.post('/signup',signup)

module.exports=router