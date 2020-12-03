const bcrypt = require('bcryptjs')

const password = '123456'

const getHash = async (password) => {
    return await bcrypt.hash(password, 8)
}
console.log('password:', password);
getHash(password)

const isRight = async (password) => {
    return await bcrypt.compare(password, await getHash(password))
}

isRight('secreto').then((data) => { console.log('isRight:', data) })

const otraIdea = (pass) => {
    return bcrypt.hash(pass, 8).then((hash) => {
        return bcrypt.compare(pass, hash)
    }).then((todoBien) => {
        console.log('increíble:', todoBien)
    }).catch((e) => { 'mira por donde:', console.log(e) })

}
otraIdea('asdsafd')

const comparar = async (password) => {
    const hash = await bcrypt.hash(password,8)
    console.log('solution hash:', hash)
    const isOk = await bcrypt.compare(password, hash)
    console.log('solution isOk:', isOk)
    return isOk
}
comparar('7654')