const mongoose= require('mongoose')
const Schema =mongoose.Schema;

const UserSchema =new Schema({
    Email:String,
    LastName:String,
    FirstName:String,
    Age :String
},{timestamps: true})


module.exports=mongoose.model('users',UserSchema)