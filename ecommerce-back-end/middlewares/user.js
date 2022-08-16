const jwt=require('jsonwebtoken')


exports.requresSignIn=(req,res,next)=>{
    if(!req.headers.authorization)return res.status(400).json({
        message:"please attach the token in the authorization headers"
    })
    const token=req.headers.authorization.split(" ")[1];
    jwt.verify(token,process.env.JWT_SECRET_KEY,(error,user)=>{
        if(error)return res.status(400).json({
            message:"invalid token"
        })
        if(user){
            req.user=user;
            next();
        }
    })
}

exports.checkAdminRoleMiddleware=(req,res,next)=>{
    const {user}=req;
    if(user.role !== 'admin')return res.status(400).json({message:"you are user, you are not allowed to create category",user})
    next();
}

exports.checkUserRoleMiddleware=(req,res,next)=>{
    if(req.user.role !=='user')return res.status(400).json({
        message:"you are not a user"
    })
    next();
}