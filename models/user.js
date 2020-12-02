const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
        
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 7
    },
    age:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        value: 0
    }
})

module.exports = User