const User=require('../models/user')

exports.signin=(req,res,next)=>{
    res.status(200).json({
        message:"hello from the post signin route"
    })
}

exports.signup=(req,res,next)=>{
    //destructuring the request body object(object destructuring)
    const  {firstName,lastName,email,password}=req.body;
    User.findOne({email:email}).exec((error,user)=>{
        if(user)return res.status(400).json ({
            message:"user already registered"
        })
        const  newUser=new User({
            firstName,lastName,email,password,username:Math.random.toString()
        })
        console.log(newUser);
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