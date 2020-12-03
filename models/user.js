const mongoose = require('mongoose')
const validator= require ('validator')
const bcrypt = require ('bcryptjs')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,    ////ponemos este parámetro para comprobar que no existen varios usuarios con ese correo
        required: true,
        trim:true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Correo no válido')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: [7,'Debe contener mínimo 7 caracteres'],
        validate(value){
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password inválido')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (!value<0) {
                throw new Error('La edad debe ser positiva')
            }
         }
    }
})


User.pre('save' , aync function (next){
   const user = this
   if(user.isModified('password')){
       user.password = await bcrypt.hash(user.password, 8)
   }
})
module.exports = User