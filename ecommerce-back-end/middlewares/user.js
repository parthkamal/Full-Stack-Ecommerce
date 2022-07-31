const jwt=require('jsonwebtoken')


exports.requresSignIn=(req,res,next)=>{
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