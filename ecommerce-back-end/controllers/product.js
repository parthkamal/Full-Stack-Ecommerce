//importing the product model
const Product= require('../models/product')

//for creating a slug from the product name
const slugify=require('slugify')



exports.createProductController=(req,res)=>{
    const {name,price,quantity,description}=req.body;
    
    let productPictures=[];
    console.log(req.files.length);
    if(req.files.length>0){
        productPictures=req.files.map(file=>{
            return {img:file.filename}
        })
    }
    //creating the product
    const product = new Product({
        name,price,quantity,description,
        slug: slugify(name),
        createdBy:req.user._id,
        pictures:productPictures
    })

    console.log(product)
    //saving the product to the database
    product.save((error,product)=>{
        if(error)return res.status(400).json({error})
        if(product)return res.status(200).json({product})
    })
}

exports.deleteProductController=(req,res)=>{
    Product.deleteMany((error,result)=>{
        if(error)return res.status(400).json({error})
        if(result)return res.status(200).json({result}) 
    })
}

exports.getProductController=(req,res)=>{
    Product.find((error,products)=>{
        if(error)return res.status(400).json(error);
        if(products)return res.status(200).json(products)
    })
}


