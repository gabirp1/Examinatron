const bcrypt = require ('bcryptjs')

const password = '123456'

const getHash = async (password)=>{
    const hash = await bcrypt.hash (password, 8)
    console.log(hash);
}
console.log('password:', password);
getHash(password)

const isRight = async (password)=>{ 
    const hash = await bcrypt.compare('123', getHash('123456'))
console.log(compare);
return true 
}

isRight(password)