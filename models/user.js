const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jsonwebtoken= require('jsonwebtoken')



const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error('Aprende a escribir');
        }
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minLength:7,

        validate(valor){
            if(valor.toLowerCase().includes('password'))
                throw new Error('Easy pass');
        }
    },
    age:{
        type: Number,
        default: 0,
        min: 0
    }
})

userSchema.methods.generateAuthToken = async function(){
const user = this
const token = await jsonwebtoken.sign({_id: user._id.toString()},
'estoessupersecreto', {expiresIn:'7 Days'})
return token
}


userSchema.statics.findUserByCredentials = async (email, password)=>{
    const user = await User.findOne({email: email})
    if (!user){
        throw new Error ('Email o password no válidos')
    }
    const isOk = await bcrypt.compare(password, user.password)
    if(!isOk){
        throw new Error ( 'Email o password no válidos')
    }
    return user
}

userSchema.pre('save', async function(next){
    const user = this; // Hace referencia al esquema
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next();
});


const User = mongoose.model('User',userSchema);
module.exports = User;