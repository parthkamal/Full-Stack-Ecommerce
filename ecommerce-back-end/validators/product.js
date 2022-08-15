const {check,validationResult}=require('express-validator')

exports.validateProductCreateRequest=[
    check('email').isString().notEmpty(),
    check('slug').isString().notEmpty(),
    check('price').isNumeric().notEmpty(),
    check('quantity').isNumeric().notEmpty(),
    check('description').isNumeric().notEmpty(),
    check('offer').isString(),
    check('pictures').isArray(),
]


exports.isRequestVaildated=(req,res,next)=>{
    const errors=validationResult(req);
    if(errors.array().length>0)return res.status(400).json({error:errors.errors});
    next();
}