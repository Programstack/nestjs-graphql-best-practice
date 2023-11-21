const mongoose = require ('./index')

const validateEmail = (e)=>{
    var emailpattern = /^[a-zA-Z0-9_-]+@[a-a-zA-Z0-9_-]+\.[a-zA-Z] {2,4}$/;
    return emailpattern.test(e);
}

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"first Name is required"]
    },
    lastName:{
        type:String,
        required:[true,"last Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        validate:validateEmail()
    },
    pasword:{
        type:String,
        required:[true,"password is required"]
    },
    status:{
        type:Boolean,
        default:true
    },
    role:{
        type:String,
        default:'customer'
    },
    createdAt:{
        type:Date,
        default:new Date()

    }

})


const userModel = mongoose.model('user',userSchema)
module.exports = userModel






