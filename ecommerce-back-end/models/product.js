//importing the mongoose model
const mongoose = require('mongoose')


//schema declaration
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, trim: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    description: { type: String, required: true, trim: true },
    offer: {type:String},
    pictures: [{ img: { type: String } }],
    reviews: [
        {
            userId: {type:mongoose.Schema.Types.ObjectId,ref:'User'},
            review: {type:String}
        }
    ],
    category:{type:mongoose.Schema.Types.ObjectId,ref:'Category'},
    createdBy:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    updatedAt:Date
}, { timestamps: true })


module.exports = mongoose.model('Product', productSchema)