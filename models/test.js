const mongoose = require('mongoose')

const Test = mongoose.model('Test', {
    question:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    answer1:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    answer2:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    answer3:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    answer4:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    }
})

module.exports = Test
