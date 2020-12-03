const jsonwebtoken = require('jsonwebtoken')

const payload = {_id: '123'}
const secretKey = 'superSecretKey!'

const firmar = async (payload, secretKey) => {
    const jwt = jsonwebtoken.sign(payload,secretKey)
    console.log(jwt);
} 


const verificar= async (jwt, secret)=>{
    const decoded = await jsonwebtoken.verify(jsonwebtoken, secretKey)
    console.log('verificando:', decoded)
}

verificar('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjMiLCJpYXQiOjE2MDY5ODk3OTN9.kOV86iDBvaJebKz2_CF9MBZA7zhJ6qFYe_qD45vJ7Z0')
firmar(payload, secretKey)