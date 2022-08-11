const mongoose=require('mongoose')
//importing the mongoose model library

const categorySchema= new mongoose.Schema({
    name:{
        required:true,
        type:String,
        trim:true,
    },
    slug:{
        required:true,
        type:String,
        unique:true,
        type:String
    },
    parentId:{
        type:String,
        default:null
    }

},{timestamps:true})

module.exports=mongoose.model('Category',categorySchema)
    
