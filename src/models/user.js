const moongose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const {Schema} = moongose

const UserSchema = new Schema({
    email:String,
    password:String
})

UserSchema.methods.encryptPassword = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

UserSchema.methods.comparePassword = function(password){
     return bcrypt.compareSync(password,this.password)
}



module.exports = moongose.model('Users',UserSchema)