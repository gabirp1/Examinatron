const mongoose = require('mongoose')

const Test = mongoose.model('Test', {
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