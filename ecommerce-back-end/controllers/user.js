const User=require('../models/user')
const jwt=require('jsonwebtoken')
const { generateFromEmail, generateUsername } = require("unique-username-generator");

exports.signin=(req,res,next)=>{
    console.log("controller tk data phucha tha")
    //destructuring the request object
    const {email,password}=req.body;
    User.findOne({email:email}).exec((error,user)=>{
        if(error)return res.status(400).json({
            message:"user not registered create a new account"
        })
        if(user){
            if(user.authenticate(password)){
                // it means the user is authenticated here we will give the token to the user and authorize it
                const token=jwt.sign({_id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{expiresIn: '1h'})
                //getting the full name from the mongoose virtual getter
                const{fullName,role,_id}=user;
                return res.status(200).json({
                    token:token,_id,email,role,fullName
                })
            }else return res.status(400).json({
                message:"invalid password"
            })
        }
    })
}

exports.signup=(req,res,next)=>{
    //destructuring the request body object(object destructuring)
    const  {firstName,lastName,email,password,role}=req.body;
    User.findOne({email:email}).exec((error,user)=>{
        if(user)return res.status(400).json ({
            message:"user already registered"
        })
        const  newUser=new User({
            firstName,lastName,email,password,username:generateFromEmail(email,4),role
        })
        newUser.save((error,user)=>{
            if(error)return res.status(400).json({
                message:`somthing went wrong ${error}`
            })
            if(user)return res.status(200).json({
                saved_user:user
            })
        })
    })
}


///api for debugging

//to get all the user
exports.getUserController=(req,res)=>{
    //extracting all the user from the database
    User.find((error,users)=>{
        if(error)return res.status(400).json(error)
        return res.status(200).json(users)
    })
}

//to delete all the user
exports.deleteUserController=(req,res)=>{
    User.deleteMany((error,result)=>{
        if(error)return res.status(400).json(error)
        return res.status(200).json({
            message:"deleted all the users successfully"
        })
    })
}

