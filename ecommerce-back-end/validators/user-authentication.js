const {check,validationResult}=require ('express-validator');

exports.validateSiginRequest=[
    check('email').isEmail(),
    check('password').isLength({min:6})
]

exports.validateSignUpRequest=[
    check('firstName').notEmpty(),
    check('lastName').notEmpty(),
    check('email').isEmail(),
    check('password').isLength({min:6})
]

exports.isRequestVaildated=(req,res,next)=>{
    const errors=validationResult(req);
    if(errors.array().length>0)return res.status(400).json({error:errors.errors});
    next();
}