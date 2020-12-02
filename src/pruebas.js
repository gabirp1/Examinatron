const bcrypt = require ('bcryptjs')

const password = '123456'

const getHash = async (password)=>{
    const hash = await bcrypt.hash (password, 8)
    console.log(hash);
}

getHash(password)
console.log(password);
console.log(getHash(password));