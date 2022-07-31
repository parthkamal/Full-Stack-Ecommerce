const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
require('dotenv').config();

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'admin'
    },
    profile: {
        type: String
    }
}, {
    timestamps: true
})


//virtuals for creating a virtual entry of 'password' and then storing it inside the hash_password entry
userSchema.virtual('password').set(function(password){
    // this will exactly store the password taken from the user which is not safe so we will user bcrypt moduel and then hash it to store in the this.hash_password entry
    this.hash_password = bcrypt.hashSync(password, 10)
})


//mongoose methods
userSchema.methods = {
    authenticate: function (password) {
        return bcrypt.compare(password, this.hash_password);
    }
}






module.exports = mongoose.model('User', userSchema)